import { buttonStyles } from "./buttonStyles.js";
import { cardStyles } from "./cardStyles.js";
import { containerStyles } from "./containerStyles.js";
import { flexStyles } from "./flexStyles.js";
import { weatherAppStyles } from "../figmaStlyes/figmaTailwing.js";
import { formStyles } from "./formStyles.js";
import { gridStyles } from "./gridStyles.js";
import { layoutStyles } from "./layoutStyles.js";
import { navigationStyles } from "./navigationStyles.js";
import { sectionStyles } from "./sectionStyles.js";
import { spacingStyles } from "./spacingStyles.js";
import { typographyStyles } from "./typographyStyles.js";

export { cn } from "./cn.js";

export const styles = {
  layout: layoutStyles,
  container: containerStyles,
  section: sectionStyles,
  flex: flexStyles,
  figma: weatherAppStyles,
  grid: gridStyles,
  spacing: spacingStyles,
  typography: typographyStyles,
  card: cardStyles,
  form: formStyles,
  button: buttonStyles,
  navigation: navigationStyles,
};

export default styles;

// Tek import: import { styles } from "./styles";
// Örnek: <div className={styles.flex.between}>...</div>
// Sonuç: İsimleri ezberlemeden, styles.kategori.seçenek şeklinde kullanırsın.

// Güvenli override: className={cn(styles.card.default, "bg-red-50 p-8")}
// Sonuç: Kartın varsayılan background ve padding değerleri yenileriyle değiştirilir.
