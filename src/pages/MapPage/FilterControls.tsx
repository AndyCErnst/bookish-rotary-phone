import { useCallback } from 'react'
import {
  Button,
  Stack,
  T,
  FormLabel,
  FormGroup,
  Checkbox,
  FormControlLabel,
} from 'MUI'
import { Category, catsList } from 'types'

interface Props {
  activeCats: Category[]
  setCats: (cats: Category[]) => void
  noneCat: boolean
  setNoneCat: (on: boolean) => void
}

const labelMap: Record<Category, string> = {
  'songs and poems': 'Songs and Poems',
  murder: 'Murder',
  trials: 'Trials',
  courtship: 'Love and Courtship'
}

export const FilterControl = ({ setCats, activeCats, noneCat, setNoneCat }: Props) => {
  const onClick = useCallback(
    (cat: Category) => () => {
      if (activeCats.includes(cat)) {
        setCats(activeCats.filter((c) => c !== cat))
      } else {
        setCats([...activeCats, cat])
      }
    },
    [activeCats],
  )

  return (
    <fieldset>
      <Stack spacing={2} direction="row" >
        <fieldset>
          <FormLabel component="legend">Filter by category</FormLabel>
          <FormGroup row>
            {catsList.map((cat) => (
              <FormControlLabel
                key={cat}
                control={
                  <Checkbox
                    checked={activeCats.includes(cat)}
                    onChange={onClick(cat)}
                  />
                }
                label={labelMap[cat]}
              />
            ))}
            <FormControlLabel
                control={
                  <Checkbox
                    checked={noneCat}
                    onChange={() => setNoneCat(!noneCat)}
                  />
                }
                label={'None'}
              />
          </FormGroup>
        </fieldset>
      </Stack>
    </fieldset>
  )
}

// <Stack spacing={2} direction="row" sx={{marginX: 2}}>
//       {catsList.map((cat) => {
//         const active = activeCats.includes(cat)
//         return (
//         <Button
//           onClick={onClick(cat)}
//           key={cat}
//           variant="contained"
//           className={'Cat'}
//           aria-active={active}
//           color={active ? "secondary" : undefined}
//         >
//           {cat}
//         </Button>
//       )})}
//     </Stack>
