import gradient from 'gradient-string';

const RawTags = {
  System: { colors: ['#66FF66', '#00CC66'] },
  Error: { colors: ['#C0382B', '#E84B3C'] },
  Debug: { colors: ['#3398DB', '#2980B9'] },
  RouteLoader: { colors: ['#66FF66', '#00CC66'] },
  RouteRegister: { colors: ['#66FF66', '#00CC66'] },
  Express: { colors: ['#f9fd12ff', '#ffd000ff'] },
  ExpressLog: { colors: ['#a7aa00ff', '#ad8e00ff'] },
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
