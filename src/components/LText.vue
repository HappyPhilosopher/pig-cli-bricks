<template>
	<component :is="tag" :style="styleProps" @click="handleClick" class="l-text-component">
		{{ text }}
	</component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { textDefaultProps, transformToComponentProps, textStylePropNames } from '@/common/defaultProps';
import useComponentCommon from '@/hooks/useComponentCommon';

const defaultProps = transformToComponentProps(textDefaultProps);

export default defineComponent({
	name: 'l-text',

	props: {
		tag: {
			type: String,
			default: 'div'
		},
		...defaultProps
	},

	setup(props) {
		const { styleProps, handleClick } = useComponentCommon(props, textStylePropNames);

		return {
			styleProps,
			handleClick
		};
	}
});
</script>

<style></style>
