[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireSectionConditionalRulesList

# Class: QuestionnaireSectionConditionalRulesList

Container message for a collection of Questionnaire Section Item records.

**`Generated`**

from message Scailo.QuestionnaireSectionConditionalRulesList

## Hierarchy

- `Message`\<[`QuestionnaireSectionConditionalRulesList`](QuestionnaireSectionConditionalRulesList.md)\>

  ↳ **`QuestionnaireSectionConditionalRulesList`**

## Table of contents

### Constructors

- [constructor](QuestionnaireSectionConditionalRulesList.md#constructor)

### Properties

- [list](QuestionnaireSectionConditionalRulesList.md#list)
- [fields](QuestionnaireSectionConditionalRulesList.md#fields)
- [runtime](QuestionnaireSectionConditionalRulesList.md#runtime)
- [typeName](QuestionnaireSectionConditionalRulesList.md#typename)

### Methods

- [clone](QuestionnaireSectionConditionalRulesList.md#clone)
- [equals](QuestionnaireSectionConditionalRulesList.md#equals)
- [fromBinary](QuestionnaireSectionConditionalRulesList.md#frombinary)
- [fromJson](QuestionnaireSectionConditionalRulesList.md#fromjson)
- [fromJsonString](QuestionnaireSectionConditionalRulesList.md#fromjsonstring)
- [getType](QuestionnaireSectionConditionalRulesList.md#gettype)
- [toBinary](QuestionnaireSectionConditionalRulesList.md#tobinary)
- [toJSON](QuestionnaireSectionConditionalRulesList.md#tojson)
- [toJson](QuestionnaireSectionConditionalRulesList.md#tojson-1)
- [toJsonString](QuestionnaireSectionConditionalRulesList.md#tojsonstring)
- [equals](QuestionnaireSectionConditionalRulesList.md#equals-1)
- [fromBinary](QuestionnaireSectionConditionalRulesList.md#frombinary-1)
- [fromJson](QuestionnaireSectionConditionalRulesList.md#fromjson-1)
- [fromJsonString](QuestionnaireSectionConditionalRulesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireSectionConditionalRulesList**(`data?`): [`QuestionnaireSectionConditionalRulesList`](QuestionnaireSectionConditionalRulesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireSectionConditionalRulesList`](QuestionnaireSectionConditionalRulesList.md)\> |

#### Returns

[`QuestionnaireSectionConditionalRulesList`](QuestionnaireSectionConditionalRulesList.md)

#### Overrides

Message\&lt;QuestionnaireSectionConditionalRulesList\&gt;.constructor

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2990](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2990)

## Properties

### list

• **list**: [`QuestionnaireSectionConditionalRule`](QuestionnaireSectionConditionalRule.md)[] = `[]`

**`Description`**

An array of Questionnaire Section Item records.

**`Generated`**

from field: repeated Scailo.QuestionnaireSectionConditionalRule list = 1;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2988](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2988)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2997](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2997)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2995](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2995)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireSectionConditionalRulesList"``

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2996](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2996)

## Methods

### clone

▸ **clone**(): [`QuestionnaireSectionConditionalRulesList`](QuestionnaireSectionConditionalRulesList.md)

Create a deep copy.

#### Returns

[`QuestionnaireSectionConditionalRulesList`](QuestionnaireSectionConditionalRulesList.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`QuestionnaireSectionConditionalRulesList`](QuestionnaireSectionConditionalRulesList.md) \| `PlainMessage`\<[`QuestionnaireSectionConditionalRulesList`](QuestionnaireSectionConditionalRulesList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`QuestionnaireSectionConditionalRulesList`](QuestionnaireSectionConditionalRulesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireSectionConditionalRulesList`](QuestionnaireSectionConditionalRulesList.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`QuestionnaireSectionConditionalRulesList`](QuestionnaireSectionConditionalRulesList.md) \| `PlainMessage`\<[`QuestionnaireSectionConditionalRulesList`](QuestionnaireSectionConditionalRulesList.md)\> |
| `b` | `undefined` \| [`QuestionnaireSectionConditionalRulesList`](QuestionnaireSectionConditionalRulesList.md) \| `PlainMessage`\<[`QuestionnaireSectionConditionalRulesList`](QuestionnaireSectionConditionalRulesList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3013](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3013)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireSectionConditionalRulesList`](QuestionnaireSectionConditionalRulesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireSectionConditionalRulesList`](QuestionnaireSectionConditionalRulesList.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3001](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3001)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireSectionConditionalRulesList`](QuestionnaireSectionConditionalRulesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireSectionConditionalRulesList`](QuestionnaireSectionConditionalRulesList.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3005](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3005)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireSectionConditionalRulesList`](QuestionnaireSectionConditionalRulesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireSectionConditionalRulesList`](QuestionnaireSectionConditionalRulesList.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3009](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3009)
