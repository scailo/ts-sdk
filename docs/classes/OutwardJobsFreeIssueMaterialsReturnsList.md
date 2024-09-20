[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsFreeIssueMaterialsReturnsList

# Class: OutwardJobsFreeIssueMaterialsReturnsList

Describes the message consisting of the list of outward job free issue material returns

**`Generated`**

from message Scailo.OutwardJobsFreeIssueMaterialsReturnsList

## Hierarchy

- `Message`\<[`OutwardJobsFreeIssueMaterialsReturnsList`](OutwardJobsFreeIssueMaterialsReturnsList.md)\>

  ↳ **`OutwardJobsFreeIssueMaterialsReturnsList`**

## Table of contents

### Constructors

- [constructor](OutwardJobsFreeIssueMaterialsReturnsList.md#constructor)

### Properties

- [list](OutwardJobsFreeIssueMaterialsReturnsList.md#list)
- [fields](OutwardJobsFreeIssueMaterialsReturnsList.md#fields)
- [runtime](OutwardJobsFreeIssueMaterialsReturnsList.md#runtime)
- [typeName](OutwardJobsFreeIssueMaterialsReturnsList.md#typename)

### Methods

- [clone](OutwardJobsFreeIssueMaterialsReturnsList.md#clone)
- [equals](OutwardJobsFreeIssueMaterialsReturnsList.md#equals)
- [fromBinary](OutwardJobsFreeIssueMaterialsReturnsList.md#frombinary)
- [fromJson](OutwardJobsFreeIssueMaterialsReturnsList.md#fromjson)
- [fromJsonString](OutwardJobsFreeIssueMaterialsReturnsList.md#fromjsonstring)
- [getType](OutwardJobsFreeIssueMaterialsReturnsList.md#gettype)
- [toBinary](OutwardJobsFreeIssueMaterialsReturnsList.md#tobinary)
- [toJSON](OutwardJobsFreeIssueMaterialsReturnsList.md#tojson)
- [toJson](OutwardJobsFreeIssueMaterialsReturnsList.md#tojson-1)
- [toJsonString](OutwardJobsFreeIssueMaterialsReturnsList.md#tojsonstring)
- [equals](OutwardJobsFreeIssueMaterialsReturnsList.md#equals-1)
- [fromBinary](OutwardJobsFreeIssueMaterialsReturnsList.md#frombinary-1)
- [fromJson](OutwardJobsFreeIssueMaterialsReturnsList.md#fromjson-1)
- [fromJsonString](OutwardJobsFreeIssueMaterialsReturnsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsFreeIssueMaterialsReturnsList**(`data?`): [`OutwardJobsFreeIssueMaterialsReturnsList`](OutwardJobsFreeIssueMaterialsReturnsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsList`](OutwardJobsFreeIssueMaterialsReturnsList.md)\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsList`](OutwardJobsFreeIssueMaterialsReturnsList.md)

#### Overrides

Message\&lt;OutwardJobsFreeIssueMaterialsReturnsList\&gt;.constructor

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:904

## Properties

### list

• **list**: [`OutwardJobFreeIssueMaterialReturn`](OutwardJobFreeIssueMaterialReturn.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.OutwardJobFreeIssueMaterialReturn list = 1;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:902

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:911

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:909

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsFreeIssueMaterialsReturnsList"``

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:910

## Methods

### clone

▸ **clone**(): [`OutwardJobsFreeIssueMaterialsReturnsList`](OutwardJobsFreeIssueMaterialsReturnsList.md)

Create a deep copy.

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsList`](OutwardJobsFreeIssueMaterialsReturnsList.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsFreeIssueMaterialsReturnsList`](OutwardJobsFreeIssueMaterialsReturnsList.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsList`](OutwardJobsFreeIssueMaterialsReturnsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsFreeIssueMaterialsReturnsList`](OutwardJobsFreeIssueMaterialsReturnsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsFreeIssueMaterialsReturnsList`](OutwardJobsFreeIssueMaterialsReturnsList.md)\>

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
| `a` | `undefined` \| [`OutwardJobsFreeIssueMaterialsReturnsList`](OutwardJobsFreeIssueMaterialsReturnsList.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsList`](OutwardJobsFreeIssueMaterialsReturnsList.md)\> |
| `b` | `undefined` \| [`OutwardJobsFreeIssueMaterialsReturnsList`](OutwardJobsFreeIssueMaterialsReturnsList.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsList`](OutwardJobsFreeIssueMaterialsReturnsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:927

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsList`](OutwardJobsFreeIssueMaterialsReturnsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsList`](OutwardJobsFreeIssueMaterialsReturnsList.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:915

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsList`](OutwardJobsFreeIssueMaterialsReturnsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsList`](OutwardJobsFreeIssueMaterialsReturnsList.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:919

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsList`](OutwardJobsFreeIssueMaterialsReturnsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsList`](OutwardJobsFreeIssueMaterialsReturnsList.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:923
