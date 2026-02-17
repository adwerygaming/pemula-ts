import gradient from 'gradient-string';

const RawTags = {
  System: { colors: ['#66FF66', '#00CC66'] },
  Error: { colors: ['#C0382B', '#E84B3C'] },
  Debug: { colors: ['#3398DB', '#2980B9'] },
  Axios: { colors: ['#A463BF', '#8E43AD'] },
};

type TagConfig = {colors: string[]};
type RawTagMap = typeof RawTags;

const tags = Object.fromEntries(
  (Object.entries(RawTags) as [keyof RawTagMap, TagConfig][]).map(([key, {colors}]) => {
    const fn = gradient(colors);
    return [key, fn(key)];
  })
) as {[K in keyof RawTagMap]: string};

export default tags;
