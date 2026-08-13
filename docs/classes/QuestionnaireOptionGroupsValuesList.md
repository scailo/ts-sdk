[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireOptionGroupsValuesList

# Class: QuestionnaireOptionGroupsValuesList

Container message for a collection of Questionnaire Option Group Value records.

**`Generated`**

from message Scailo.QuestionnaireOptionGroupsValuesList

## Hierarchy

- `Message`\<[`QuestionnaireOptionGroupsValuesList`](QuestionnaireOptionGroupsValuesList.md)\>

  ↳ **`QuestionnaireOptionGroupsValuesList`**

## Table of contents

### Constructors

- [constructor](QuestionnaireOptionGroupsValuesList.md#constructor)

### Properties

- [list](QuestionnaireOptionGroupsValuesList.md#list)
- [fields](QuestionnaireOptionGroupsValuesList.md#fields)
- [runtime](QuestionnaireOptionGroupsValuesList.md#runtime)
- [typeName](QuestionnaireOptionGroupsValuesList.md#typename)

### Methods

- [clone](QuestionnaireOptionGroupsValuesList.md#clone)
- [equals](QuestionnaireOptionGroupsValuesList.md#equals)
- [fromBinary](QuestionnaireOptionGroupsValuesList.md#frombinary)
- [fromJson](QuestionnaireOptionGroupsValuesList.md#fromjson)
- [fromJsonString](QuestionnaireOptionGroupsValuesList.md#fromjsonstring)
- [getType](QuestionnaireOptionGroupsValuesList.md#gettype)
- [toBinary](QuestionnaireOptionGroupsValuesList.md#tobinary)
- [toJSON](QuestionnaireOptionGroupsValuesList.md#tojson)
- [toJson](QuestionnaireOptionGroupsValuesList.md#tojson-1)
- [toJsonString](QuestionnaireOptionGroupsValuesList.md#tojsonstring)
- [equals](QuestionnaireOptionGroupsValuesList.md#equals-1)
- [fromBinary](QuestionnaireOptionGroupsValuesList.md#frombinary-1)
- [fromJson](QuestionnaireOptionGroupsValuesList.md#fromjson-1)
- [fromJsonString](QuestionnaireOptionGroupsValuesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireOptionGroupsValuesList**(`data?`): [`QuestionnaireOptionGroupsValuesList`](QuestionnaireOptionGroupsValuesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireOptionGroupsValuesList`](QuestionnaireOptionGroupsValuesList.md)\> |

#### Returns

[`QuestionnaireOptionGroupsValuesList`](QuestionnaireOptionGroupsValuesList.md)

#### Overrides

Message\&lt;QuestionnaireOptionGroupsValuesList\&gt;.constructor

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1067

## Properties

### list

• **list**: [`QuestionnaireOptionGroupValue`](QuestionnaireOptionGroupValue.md)[] = `[]`

**`Description`**

An array of Questionnaire Option Group Value records.

**`Generated`**

from field: repeated Scailo.QuestionnaireOptionGroupValue list = 1;

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1065

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1074

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1072

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireOptionGroupsValuesList"``

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1073

## Methods

### clone

▸ **clone**(): [`QuestionnaireOptionGroupsValuesList`](QuestionnaireOptionGroupsValuesList.md)

Create a deep copy.

#### Returns

[`QuestionnaireOptionGroupsValuesList`](QuestionnaireOptionGroupsValuesList.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireOptionGroupsValuesList`](QuestionnaireOptionGroupsValuesList.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupsValuesList`](QuestionnaireOptionGroupsValuesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireOptionGroupsValuesList`](QuestionnaireOptionGroupsValuesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireOptionGroupsValuesList`](QuestionnaireOptionGroupsValuesList.md)\>

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
| `a` | `undefined` \| [`QuestionnaireOptionGroupsValuesList`](QuestionnaireOptionGroupsValuesList.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupsValuesList`](QuestionnaireOptionGroupsValuesList.md)\> |
| `b` | `undefined` \| [`QuestionnaireOptionGroupsValuesList`](QuestionnaireOptionGroupsValuesList.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupsValuesList`](QuestionnaireOptionGroupsValuesList.md)\> |

#### Returns

`boolean`

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1090

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireOptionGroupsValuesList`](QuestionnaireOptionGroupsValuesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupsValuesList`](QuestionnaireOptionGroupsValuesList.md)

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1078

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireOptionGroupsValuesList`](QuestionnaireOptionGroupsValuesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupsValuesList`](QuestionnaireOptionGroupsValuesList.md)

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1082

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireOptionGroupsValuesList`](QuestionnaireOptionGroupsValuesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupsValuesList`](QuestionnaireOptionGroupsValuesList.md)

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1086
