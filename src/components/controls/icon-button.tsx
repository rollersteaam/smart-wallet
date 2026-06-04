import { AndroidSymbol, SFSymbol, SymbolView } from "expo-symbols";
import { GestureResponderEvent, Pressable, StyleProp, ViewStyle } from "react-native";

/**
 * An icon button that conveniently styles it as a platform-native one.
 */
export default function IconButton(
    { onPress, name, style }: {
        onPress?: ((event: GestureResponderEvent) => void) | null,
        name: SFSymbol | {
            ios?: SFSymbol;
            android?: AndroidSymbol;
            web?: AndroidSymbol;
        },
        style?: StyleProp<ViewStyle>
    }
) {
    return (
        <Pressable onPress={onPress}
            android_ripple={{
                borderless: true,
                radius: 24,
            }}
            hitSlop={12}
            style={({ pressed }) => ({
                backgroundColor: 'transparent',
                opacity: pressed ? 0.7 : 1,
                ...style
            })}>
            <SymbolView
                name={name}
                size={32}
                tintColor="#ffffff"
                animationSpec={{ effect: { type: 'bounce', direction: 'up' } }}
                />
        </Pressable>
    )
}