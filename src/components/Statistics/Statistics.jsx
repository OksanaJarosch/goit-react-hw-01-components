import {StatSection, Titel, StatList, StatItem} from "./Statistics.styled"

export const Statistic = ({title, data}) => {
    return (
        <StatSection>
{title && <Titel>{title}</Titel>}

  <StatList>
{data.map(stat => (
        <StatItem key={stat.id} $variant={stat.label}>
        <span>{stat.label}</span>
        <span>{stat.percentage}%</span>
      </StatItem>
))}
  </StatList>
</StatSection>
    )
}