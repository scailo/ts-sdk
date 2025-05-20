[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsFreeIssueMaterialsReturnsItemsList

# Class: OutwardJobsFreeIssueMaterialsReturnsItemsList

Describes the message consisting of the list of outward job free issue material return items

**`Generated`**

from message Scailo.OutwardJobsFreeIssueMaterialsReturnsItemsList

## Hierarchy

- `Message`\<[`OutwardJobsFreeIssueMaterialsReturnsItemsList`](OutwardJobsFreeIssueMaterialsReturnsItemsList.md)\>

  ↳ **`OutwardJobsFreeIssueMaterialsReturnsItemsList`**

## Table of contents

### Constructors

- [constructor](OutwardJobsFreeIssueMaterialsReturnsItemsList.md#constructor)

### Properties

- [list](OutwardJobsFreeIssueMaterialsReturnsItemsList.md#list)
- [fields](OutwardJobsFreeIssueMaterialsReturnsItemsList.md#fields)
- [runtime](OutwardJobsFreeIssueMaterialsReturnsItemsList.md#runtime)
- [typeName](OutwardJobsFreeIssueMaterialsReturnsItemsList.md#typename)

### Methods

- [clone](OutwardJobsFreeIssueMaterialsReturnsItemsList.md#clone)
- [equals](OutwardJobsFreeIssueMaterialsReturnsItemsList.md#equals)
- [fromBinary](OutwardJobsFreeIssueMaterialsReturnsItemsList.md#frombinary)
- [fromJson](OutwardJobsFreeIssueMaterialsReturnsItemsList.md#fromjson)
- [fromJsonString](OutwardJobsFreeIssueMaterialsReturnsItemsList.md#fromjsonstring)
- [getType](OutwardJobsFreeIssueMaterialsReturnsItemsList.md#gettype)
- [toBinary](OutwardJobsFreeIssueMaterialsReturnsItemsList.md#tobinary)
- [toJSON](OutwardJobsFreeIssueMaterialsReturnsItemsList.md#tojson)
- [toJson](OutwardJobsFreeIssueMaterialsReturnsItemsList.md#tojson-1)
- [toJsonString](OutwardJobsFreeIssueMaterialsReturnsItemsList.md#tojsonstring)
- [equals](OutwardJobsFreeIssueMaterialsReturnsItemsList.md#equals-1)
- [fromBinary](OutwardJobsFreeIssueMaterialsReturnsItemsList.md#frombinary-1)
- [fromJson](OutwardJobsFreeIssueMaterialsReturnsItemsList.md#fromjson-1)
- [fromJsonString](OutwardJobsFreeIssueMaterialsReturnsItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsFreeIssueMaterialsReturnsItemsList**(`data?`): [`OutwardJobsFreeIssueMaterialsReturnsItemsList`](OutwardJobsFreeIssueMaterialsReturnsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsItemsList`](OutwardJobsFreeIssueMaterialsReturnsItemsList.md)\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsItemsList`](OutwardJobsFreeIssueMaterialsReturnsItemsList.md)

#### Overrides

Message\&lt;OutwardJobsFreeIssueMaterialsReturnsItemsList\&gt;.constructor

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:973

## Properties

### list

• **list**: [`OutwardJobFreeIssueMaterialReturnItem`](OutwardJobFreeIssueMaterialReturnItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.OutwardJobFreeIssueMaterialReturnItem list = 1;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:971

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:980

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:978

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsFreeIssueMaterialsReturnsItemsList"``

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:979

## Methods

### clone

▸ **clone**(): [`OutwardJobsFreeIssueMaterialsReturnsItemsList`](OutwardJobsFreeIssueMaterialsReturnsItemsList.md)

Create a deep copy.

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsItemsList`](OutwardJobsFreeIssueMaterialsReturnsItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsFreeIssueMaterialsReturnsItemsList`](OutwardJobsFreeIssueMaterialsReturnsItemsList.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsItemsList`](OutwardJobsFreeIssueMaterialsReturnsItemsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsFreeIssueMaterialsReturnsItemsList`](OutwardJobsFreeIssueMaterialsReturnsItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsFreeIssueMaterialsReturnsItemsList`](OutwardJobsFreeIssueMaterialsReturnsItemsList.md)\>

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
| `a` | `undefined` \| [`OutwardJobsFreeIssueMaterialsReturnsItemsList`](OutwardJobsFreeIssueMaterialsReturnsItemsList.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsItemsList`](OutwardJobsFreeIssueMaterialsReturnsItemsList.md)\> |
| `b` | `undefined` \| [`OutwardJobsFreeIssueMaterialsReturnsItemsList`](OutwardJobsFreeIssueMaterialsReturnsItemsList.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsItemsList`](OutwardJobsFreeIssueMaterialsReturnsItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:996

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsItemsList`](OutwardJobsFreeIssueMaterialsReturnsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsItemsList`](OutwardJobsFreeIssueMaterialsReturnsItemsList.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:984

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsItemsList`](OutwardJobsFreeIssueMaterialsReturnsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsItemsList`](OutwardJobsFreeIssueMaterialsReturnsItemsList.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:988

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsItemsList`](OutwardJobsFreeIssueMaterialsReturnsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsItemsList`](OutwardJobsFreeIssueMaterialsReturnsItemsList.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:992
