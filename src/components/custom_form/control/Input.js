import { getTemplate, getSlotContent, getStringTypeAttr } from '@/components/template'

export default (_self, h) => {
  return [
    h("Input", {
      props: {
        placeholder: _self.obj.placeholder.value || "这是一个输入框",
        maxlength: parseInt(_self.obj.maxLength.value) || 20,
        value: _self.obj.value.value || ""
      },
      on: {
        "on-change": function(val) {
          if (!_self.obj.name.value) {
            return false;
          }
          _self.obj.value.value= event.currentTarget.value;
          _self.$emit('handleChangeVal', val.currentTarget.value)
        }
      }
    })
  ];
};

export const input = (obj) => {
  //定义默认属性
  let slots = {
      prepend:[],
      append:[]
  }

  //覆盖默认属性
  Object.assign(slots, {})
  const config = Object.assign(inputConf, obj)

  //根据组件不同需要做的不同操作


  //获取插槽模板内容
  // var subContent = getSlotContent(slots)
  //   //设置当前组件的slot
  // if (attributes.slot && attributes.slot !== 'default') {
  //   attributes.slot = {
  //       type: 'text',
  //       value: attributes.slot
  //   }
  // } else {
  //   attributes.slot = {
  //       type: 'text',
  //       value: ''
  //   }
  // }
  let stringAttr = getStringTypeAttr(config)
  console.log(stringAttr)
  let template = `<el-input 
                      ${stringAttr}>
                  </el-input>`
  return template
};

export let inputConf = {
  // 对应数据库内类型
  type: {
    type: 'String',
    value: 'text'
  },
  // 是否可配置
  config: {
    type: 'Boolean',
    value: true
  },
  // 控件左侧label内容
  label: {
    type: 'String',
    value: '输入框'
  },
  placeholder: {
    type: 'String',
    value: ''
  },
  // 是否显示行内元素
  inlineBlock: {
    type: 'Boolean',
    value: false
  },
  // 是否必填
  require: {
    type: 'Boolean',
    value: true
  },
  // 最大长度
  maxLength: {
    type: 'Number',
    value: 20
  },
  // 选项内数据
  items: [{ "label_value": null, "label_name": "" }],
  value: {
    type: 'String',
    value: ''
  },
  // 表单name
  name: {
    type: 'String',
    value: ''
  },
  // 验证错误提示信息
  ruleError: {
    type: 'String',
    value: '该字段不能为空'
  },
  // 是否关联字段
  relation: {
    type: 'Boolean',
    value: false
  },
  // 关联字段name
  relation_name: {
    type: 'String',
    value: ''
  },
  // 关联字段value
  relation_value: {
    type: 'String',
    value: ''
  },
  // 是否被渲染
  visibility: {
    type: 'Boolean',
    value: true
  }
}
