import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Image } from 'expo-image';
import { getLocales } from 'expo-localization';
import { useShallow } from 'zustand/react/shallow';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { useAuthStore } from '@/hooks/stores/use-auth-store';
import { useWalletStore } from '@/hooks/stores/use-wallet-store';
import useRemoteAsset from '@/hooks/use-remote-asset';
import { Column, Host, Row } from '@expo/ui';

function formatCurrency(value: number) {
  const { languageTag, currencyCode } = getLocales()[0];
  return new Intl.NumberFormat(languageTag, {
    style: 'currency',
    currency: currencyCode ?? 'GBP',
  }).format(value);
}

export default function HomeScreen() {
  const user = useAuthStore((s) => s.user)

  if (!user) {
    return <></>
  }

  const { balance, history } = useWalletStore(
    useShallow((s) => ({ balance: s.balance, history: s.history }))
  )
  const { localUri: userPhoto } = useRemoteAsset(user.photoURL ?? '')

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.heroSection}>
          <Image
            source={userPhoto}
            style={{
              width: 100,
              height: 100,
              borderRadius: 9999,
              overflow: 'hidden',
              marginTop: 120
            }}
          />

          <ThemedText type="title" style={styles.title}>
            Welcome, {user.displayName?.split(" ")[0]}.
          </ThemedText>

          <ThemedView type="backgroundElement"
            style={{
              padding: Spacing.six,
              alignItems: 'center',
              borderRadius: 24,
              width: '100%'
            }}>
            <ThemedText>
              Your Balance
            </ThemedText>
            <ThemedText type="title">
              {formatCurrency(balance)}
            </ThemedText>
          </ThemedView>

          <ThemedView type="backgroundElement"
            style={{
              // padding: Spacing.six,
              alignItems: 'center',
              borderRadius: 24,
              width: '100%'
            }}>
            <ThemedText style={{
              marginBottom: Spacing.four
            }}>
              Transaction History
            </ThemedText>

            <Host style={{
              flex: 1
            }}>
              <Row spacing={16}>
                <Column style={{
                  width: 50
                }}
                >
                  <ThemedText type="small">
                    Date
                  </ThemedText>
                  {history.map((h) => <ThemedText key={h.id} numberOfLines={1}>{h.date.toISOString()}</ThemedText>)}
                </Column>

                <Column>
                  <ThemedText type="small">
                    Description
                  </ThemedText>
                  {history.map((h) => <ThemedText key={h.id} numberOfLines={1}>{h.description}</ThemedText>)}
                </Column>

                <Column>
                  <ThemedText type="small">
                    Amount
                  </ThemedText>
                  {history.map((h) => <ThemedText key={h.id} numberOfLines={1}>{formatCurrency(h.amount)}</ThemedText>)}
                </Column>

                <Column>
                  <ThemedText type="small">
                    Balance
                  </ThemedText>
                  {history.map((h) => <ThemedText key={h.id} numberOfLines={1}>{formatCurrency(h.runningBalance)}</ThemedText>)}
                </Column>
              </Row>
            </Host>

          </ThemedView>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: 'center',
  },
  code: {
    textTransform: 'uppercase',
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
});
