export type MasterType = "mdi" | "mdec"

export default defineAppConfig({
  master: "mdi" as MasterType,
  masterData: {
    mdi: {
      theme: "",
      root: "mdi"
    }
  }
})
