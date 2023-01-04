import { mapValues, without } from 'lodash-es';

// 通用组件属性接口
export interface CommonComponentProps {
	// actions
	actionType: string;
	url: string;
	// size
	height: string;
	width: string;
	paddingLeft: string;
	paddingRight: string;
	paddingTop: string;
	paddingBottom: string;
	// border type
	borderStyle: string;
	borderColor: string;
	borderWidth: string;
	borderRadius: string;
	// shadow and opacity
	boxShadow: string;
	opacity: string;
	// position and x,y
	position: string;
	left: string;
	top: string;
	right: string;
}

// 文本组件属性接口
export interface TextComponentProps extends CommonComponentProps {
	text: string;
	fontSize: string;
	fontFamily: string;
	fontWeight: string;
	fontStyle: string;
	textDecoration: string;
	lineHeight: string;
	textAlign: string;
	color: string;
	backgroundColor: string;
}

// 图片组件属性接口
export interface ImageComponentProps extends CommonComponentProps {
	src: string;
}

// 形状组件属性接口
export interface ShapeComponentProps extends CommonComponentProps {
	backgroundColor: string;
}

// 所有组件属性类型
export type AllComponentProps = TextComponentProps & ImageComponentProps & ShapeComponentProps;

// 通用默认属性
export const commonDefaultProps: CommonComponentProps = {
	// actions
	actionType: '',
	url: '',
	// size
	height: '',
	width: '375px',
	paddingLeft: '0px',
	paddingRight: '0px',
	paddingTop: '0px',
	paddingBottom: '0px',
	// border type
	borderStyle: 'none',
	borderColor: '#000',
	borderWidth: '0',
	borderRadius: '0',
	// shadow and opacity
	boxShadow: '0 0 0 #000000',
	opacity: '1',
	// position and x,y
	position: 'relative',
	left: '0',
	top: '0',
	right: '0'
};

// 文本默认属性（包含无用属性，需检索，见 textStylePropNames）
export const textDefaultProps: TextComponentProps = {
	// basic props - font styles
	text: '正文内容',
	fontSize: '14px',
	fontFamily: '',
	fontWeight: 'normal',
	fontStyle: 'normal',
	textDecoration: 'none',
	lineHeight: '1',
	textAlign: 'left',
	color: '#000000',
	backgroundColor: '',
	...commonDefaultProps
};

// 图片默认属性（包含无用属性，需检索，见 imageStylePropsNames）
export const imageDefaultProps: ImageComponentProps = {
	src: 'test.url',
	...commonDefaultProps
};

// 形状默认属性（包含无用属性，需检索，见 shapeStylePropsNames）
export const shapeDefaultProps: ShapeComponentProps = {
	backgroundColor: '',
	...commonDefaultProps
};

// 编辑状态属性
export const isEditingProp = {
	isEditing: {
		type: Boolean,
		default: false
	}
};

// 文本样式属性
export const textStylePropNames = without(Object.keys(textDefaultProps), 'actionType', 'url', 'text');

// 图片样式属性
export const imageStylePropsNames = without(Object.keys(imageDefaultProps), 'actionType', 'url', 'src');

// 形状样式属性
export const shapeStylePropsNames = without(Object.keys(imageDefaultProps), 'actionType', 'url');

/**
 * 将各类属性转化为组件属性 props 的结构
 * @param props 属性
 * @returns 返回 {type: String, default: ''} 类似的 props 结构
 */
export const transformToComponentProps = <T extends object>(props: T) => {
	const mapProps = mapValues(props, item => ({
		type: (item as any).constructor as StringConstructor,
		default: item
	}));

	return {
		...mapProps,
		...isEditingProp
	};
};
