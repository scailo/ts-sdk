[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / WorkflowsRulesList

# Class: WorkflowsRulesList

Describes the message consisting of the list of workflows rules

**`Generated`**

from message Scailo.WorkflowsRulesList

## Hierarchy

- `Message`\<[`WorkflowsRulesList`](WorkflowsRulesList.md)\>

  ↳ **`WorkflowsRulesList`**

## Table of contents

### Constructors

- [constructor](WorkflowsRulesList.md#constructor)

### Properties

- [list](WorkflowsRulesList.md#list)
- [fields](WorkflowsRulesList.md#fields)
- [runtime](WorkflowsRulesList.md#runtime)
- [typeName](WorkflowsRulesList.md#typename)

### Methods

- [clone](WorkflowsRulesList.md#clone)
- [equals](WorkflowsRulesList.md#equals)
- [fromBinary](WorkflowsRulesList.md#frombinary)
- [fromJson](WorkflowsRulesList.md#fromjson)
- [fromJsonString](WorkflowsRulesList.md#fromjsonstring)
- [getType](WorkflowsRulesList.md#gettype)
- [toBinary](WorkflowsRulesList.md#tobinary)
- [toJSON](WorkflowsRulesList.md#tojson)
- [toJson](WorkflowsRulesList.md#tojson-1)
- [toJsonString](WorkflowsRulesList.md#tojsonstring)
- [equals](WorkflowsRulesList.md#equals-1)
- [fromBinary](WorkflowsRulesList.md#frombinary-1)
- [fromJson](WorkflowsRulesList.md#fromjson-1)
- [fromJsonString](WorkflowsRulesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new WorkflowsRulesList**(`data?`): [`WorkflowsRulesList`](WorkflowsRulesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`WorkflowsRulesList`](WorkflowsRulesList.md)\> |

#### Returns

[`WorkflowsRulesList`](WorkflowsRulesList.md)

#### Overrides

Message\&lt;WorkflowsRulesList\&gt;.constructor

#### Defined in

src/workflows_rules.scailo_pb.ts:1226

## Properties

### list

• **list**: [`WorkflowRule`](WorkflowRule.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.WorkflowRule list = 1;

#### Defined in

src/workflows_rules.scailo_pb.ts:1224

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/workflows_rules.scailo_pb.ts:1233

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/workflows_rules.scailo_pb.ts:1231

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.WorkflowsRulesList"``

#### Defined in

src/workflows_rules.scailo_pb.ts:1232

## Methods

### clone

▸ **clone**(): [`WorkflowsRulesList`](WorkflowsRulesList.md)

Create a deep copy.

#### Returns

[`WorkflowsRulesList`](WorkflowsRulesList.md)

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
| `other` | `undefined` \| ``null`` \| [`WorkflowsRulesList`](WorkflowsRulesList.md) \| `PlainMessage`\<[`WorkflowsRulesList`](WorkflowsRulesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`WorkflowsRulesList`](WorkflowsRulesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`WorkflowsRulesList`](WorkflowsRulesList.md)\>

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
| `a` | `undefined` \| [`WorkflowsRulesList`](WorkflowsRulesList.md) \| `PlainMessage`\<[`WorkflowsRulesList`](WorkflowsRulesList.md)\> |
| `b` | `undefined` \| [`WorkflowsRulesList`](WorkflowsRulesList.md) \| `PlainMessage`\<[`WorkflowsRulesList`](WorkflowsRulesList.md)\> |

#### Returns

`boolean`

#### Defined in

src/workflows_rules.scailo_pb.ts:1249

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`WorkflowsRulesList`](WorkflowsRulesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`WorkflowsRulesList`](WorkflowsRulesList.md)

#### Defined in

src/workflows_rules.scailo_pb.ts:1237

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`WorkflowsRulesList`](WorkflowsRulesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkflowsRulesList`](WorkflowsRulesList.md)

#### Defined in

src/workflows_rules.scailo_pb.ts:1241

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`WorkflowsRulesList`](WorkflowsRulesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkflowsRulesList`](WorkflowsRulesList.md)

#### Defined in

src/workflows_rules.scailo_pb.ts:1245
