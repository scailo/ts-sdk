[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobInwardInventoryMatchList

# Class: OutwardJobInwardInventoryMatchList

Describes the list of inward inventory match families

**`Generated`**

from message Scailo.OutwardJobInwardInventoryMatchList

## Hierarchy

- `Message`\<[`OutwardJobInwardInventoryMatchList`](OutwardJobInwardInventoryMatchList.md)\>

  ↳ **`OutwardJobInwardInventoryMatchList`**

## Table of contents

### Constructors

- [constructor](OutwardJobInwardInventoryMatchList.md#constructor)

### Properties

- [list](OutwardJobInwardInventoryMatchList.md#list)
- [fields](OutwardJobInwardInventoryMatchList.md#fields)
- [runtime](OutwardJobInwardInventoryMatchList.md#runtime)
- [typeName](OutwardJobInwardInventoryMatchList.md#typename)

### Methods

- [clone](OutwardJobInwardInventoryMatchList.md#clone)
- [equals](OutwardJobInwardInventoryMatchList.md#equals)
- [fromBinary](OutwardJobInwardInventoryMatchList.md#frombinary)
- [fromJson](OutwardJobInwardInventoryMatchList.md#fromjson)
- [fromJsonString](OutwardJobInwardInventoryMatchList.md#fromjsonstring)
- [getType](OutwardJobInwardInventoryMatchList.md#gettype)
- [toBinary](OutwardJobInwardInventoryMatchList.md#tobinary)
- [toJSON](OutwardJobInwardInventoryMatchList.md#tojson)
- [toJson](OutwardJobInwardInventoryMatchList.md#tojson-1)
- [toJsonString](OutwardJobInwardInventoryMatchList.md#tojsonstring)
- [equals](OutwardJobInwardInventoryMatchList.md#equals-1)
- [fromBinary](OutwardJobInwardInventoryMatchList.md#frombinary-1)
- [fromJson](OutwardJobInwardInventoryMatchList.md#fromjson-1)
- [fromJsonString](OutwardJobInwardInventoryMatchList.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobInwardInventoryMatchList**(`data?`): [`OutwardJobInwardInventoryMatchList`](OutwardJobInwardInventoryMatchList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobInwardInventoryMatchList`](OutwardJobInwardInventoryMatchList.md)\> |

#### Returns

[`OutwardJobInwardInventoryMatchList`](OutwardJobInwardInventoryMatchList.md)

#### Overrides

Message\&lt;OutwardJobInwardInventoryMatchList\&gt;.constructor

#### Defined in

src/outward_jobs.scailo_pb.ts:3444

## Properties

### list

• **list**: [`OutwardJobInwardInventoryMatch`](OutwardJobInwardInventoryMatch.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.OutwardJobInwardInventoryMatch list = 1;

#### Defined in

src/outward_jobs.scailo_pb.ts:3442

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs.scailo_pb.ts:3451

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs.scailo_pb.ts:3449

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobInwardInventoryMatchList"``

#### Defined in

src/outward_jobs.scailo_pb.ts:3450

## Methods

### clone

▸ **clone**(): [`OutwardJobInwardInventoryMatchList`](OutwardJobInwardInventoryMatchList.md)

Create a deep copy.

#### Returns

[`OutwardJobInwardInventoryMatchList`](OutwardJobInwardInventoryMatchList.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobInwardInventoryMatchList`](OutwardJobInwardInventoryMatchList.md) \| `PlainMessage`\<[`OutwardJobInwardInventoryMatchList`](OutwardJobInwardInventoryMatchList.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobInwardInventoryMatchList`](OutwardJobInwardInventoryMatchList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobInwardInventoryMatchList`](OutwardJobInwardInventoryMatchList.md)\>

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
| `a` | `undefined` \| [`OutwardJobInwardInventoryMatchList`](OutwardJobInwardInventoryMatchList.md) \| `PlainMessage`\<[`OutwardJobInwardInventoryMatchList`](OutwardJobInwardInventoryMatchList.md)\> |
| `b` | `undefined` \| [`OutwardJobInwardInventoryMatchList`](OutwardJobInwardInventoryMatchList.md) \| `PlainMessage`\<[`OutwardJobInwardInventoryMatchList`](OutwardJobInwardInventoryMatchList.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs.scailo_pb.ts:3467

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobInwardInventoryMatchList`](OutwardJobInwardInventoryMatchList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobInwardInventoryMatchList`](OutwardJobInwardInventoryMatchList.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:3455

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobInwardInventoryMatchList`](OutwardJobInwardInventoryMatchList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobInwardInventoryMatchList`](OutwardJobInwardInventoryMatchList.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:3459

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobInwardInventoryMatchList`](OutwardJobInwardInventoryMatchList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobInwardInventoryMatchList`](OutwardJobInwardInventoryMatchList.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:3463
