const BlockLabel = ({ label, value }: { label: string; value: any }) => {
  return (
    <div className="flex justify-between text-primaryClear mb-1">
      <div className="text-16 ml-4 text-16">{label}</div>
      <div className="flex text-12 items-center">
        <div className="text-12 transform translate-y-px">Available</div>
        <div className="font-heading text-primary ml-2">{value}</div>
      </div>
    </div>
  )
}

export default BlockLabel
