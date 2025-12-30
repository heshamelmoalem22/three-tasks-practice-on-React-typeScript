type ButtonProps =  React.ComponentPropsWithoutRef<"button">&
{
    href?:never
}; 
type anchorProps = React.ComponentPropsWithoutRef<"a">&{
    herf?:string;
};
function isAnchorProps(props: ButtonProps | anchorProps): props is anchorProps {
  return "href" in props;
}
export default function Button(props:ButtonProps | anchorProps) {
    if(isAnchorProps(props))
    return <a  {...props}></a>
  return (
    <button className="button"  {...props}></button>
  )
}
