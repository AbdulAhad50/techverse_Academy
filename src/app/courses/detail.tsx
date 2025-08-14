import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

export const Detail = ({button,name,module}:{button:string,name:string,module:string[]}) => {
  return (
    <Drawer>
  <DrawerTrigger>{button}</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>{name}</DrawerTitle>
      <DrawerDescription>{
          module.map((c,i)=>{
            return(
              <ul key={i}>
                  <li key={i}>{c}</li>
              </ul>
            )
          })
        
        }</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
  )
}
