import { useCallback } from 'react'
import {
  Stack,
  FormLabel,
  FormGroup,
  Checkbox,
  FormControlLabel,
  Box,
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
  courtship: 'Love and Courtship',
}

export const FilterControl = ({
  setCats,
  activeCats,
  noneCat,
  setNoneCat,
}: Props) => {
  const onClick = useCallback(
    (cat: Category) => () => {
      if (activeCats.includes(cat)) {
        setCats(activeCats.filter((c) => c !== cat))
      } else {
        setCats([...activeCats, cat])
      }
    },
    [activeCats]
  )

  const labelStyle = {justifyContent: 'space-between', marginLeft: 0, maxWidth: 130}

  return (
    <Box
    sx={{
      position: 'absolute',
      bottom: '8px',
      left: '8px',
      zIndex: 1000,
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
    }}
  >
    <Stack marginX={2} marginY={1} spacing={2} component="fieldset">
      <FormLabel component="legend">Topics</FormLabel>
      <FormGroup >
        {catsList.map((cat) => (
          <FormControlLabel
          labelPlacement="start"
          sx={labelStyle}
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
        labelPlacement="start"
        sx={labelStyle}
          control={
            <Checkbox checked={noneCat} onChange={() => setNoneCat(!noneCat)} />
          }
          label={'None'}
        />
      </FormGroup>
    </Stack>
    </Box>
  )
}
