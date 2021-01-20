import { Story, Meta } from "@storybook/react/types-6-0"

import GlobalHeader, { Props } from "./GlobalHeader"

export default {
  title: "GlobalHeader",
  component: GlobalHeader,
} as Meta

const Template: Story<Props> = (args) => <GlobalHeader {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  isLoggedIn: true,
  env: "development",
  onOpenSidebar: () => console.log("click"),
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  isLoggedIn: false,
  env: "development",
  onOpenSidebar: () => console.log("click"),
}
