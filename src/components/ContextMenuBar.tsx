import { Card, List, ListItem } from "@/components/material";
import { IContextMenuBarProps } from "./ContextMenuBar.types";
import { forwardRef } from "react";

export default forwardRef<HTMLDivElement, IContextMenuBarProps>(function ContextMenuBar(props, ref) {
    const {
        onPress,
        items = [],
        isVisible = false,
        style
    } = props;

    return (
        <>
            {!!isVisible && (
                <Card
                    className="fixed bg-secondary z-10"
                    style={style}
                    ref={ref}
                >
                    <List className="text-sm text-font-primary">
                        {items.map((item, idx) => (
                            <ListItem key={idx} onClick={() => onPress?.(item)}>{item.label}</ListItem>
                        ))}
                    </List>
                </Card>
            )}
        </>
    );
})