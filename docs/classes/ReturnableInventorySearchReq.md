[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ReturnableInventorySearchReq

# Class: ReturnableInventorySearchReq

Describes the message that consists of parameters that are required to retrieve returnable inventory

**`Generated`**

from message Scailo.ReturnableInventorySearchReq

## Hierarchy

- `Message`\<[`ReturnableInventorySearchReq`](ReturnableInventorySearchReq.md)\>

  ↳ **`ReturnableInventorySearchReq`**

## Table of contents

### Constructors

- [constructor](ReturnableInventorySearchReq.md#constructor)

### Properties

- [familyId](ReturnableInventorySearchReq.md#familyid)
- [locationId](ReturnableInventorySearchReq.md#locationid)
- [refId](ReturnableInventorySearchReq.md#refid)
- [searchKey](ReturnableInventorySearchReq.md#searchkey)
- [fields](ReturnableInventorySearchReq.md#fields)
- [runtime](ReturnableInventorySearchReq.md#runtime)
- [typeName](ReturnableInventorySearchReq.md#typename)

### Methods

- [clone](ReturnableInventorySearchReq.md#clone)
- [equals](ReturnableInventorySearchReq.md#equals)
- [fromBinary](ReturnableInventorySearchReq.md#frombinary)
- [fromJson](ReturnableInventorySearchReq.md#fromjson)
- [fromJsonString](ReturnableInventorySearchReq.md#fromjsonstring)
- [getType](ReturnableInventorySearchReq.md#gettype)
- [toBinary](ReturnableInventorySearchReq.md#tobinary)
- [toJSON](ReturnableInventorySearchReq.md#tojson)
- [toJson](ReturnableInventorySearchReq.md#tojson-1)
- [toJsonString](ReturnableInventorySearchReq.md#tojsonstring)
- [equals](ReturnableInventorySearchReq.md#equals-1)
- [fromBinary](ReturnableInventorySearchReq.md#frombinary-1)
- [fromJson](ReturnableInventorySearchReq.md#fromjson-1)
- [fromJsonString](ReturnableInventorySearchReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ReturnableInventorySearchReq**(`data?`): [`ReturnableInventorySearchReq`](ReturnableInventorySearchReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ReturnableInventorySearchReq`](ReturnableInventorySearchReq.md)\> |

#### Returns

[`ReturnableInventorySearchReq`](ReturnableInventorySearchReq.md)

#### Overrides

Message\&lt;ReturnableInventorySearchReq\&gt;.constructor

#### Defined in

src/inventory.scailo_pb.ts:832

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the family that needs to be retrieved

**`Generated`**

from field: uint64 family_id = 10;

#### Defined in

src/inventory.scailo_pb.ts:823

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

Stores the ID of the location from where the inventory needs to be retrieved

**`Generated`**

from field: uint64 location_id = 15;

#### Defined in

src/inventory.scailo_pb.ts:830

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

Stores the ID of the reference (such as purchase order, sales order, inward job, outward job, stock issuance)

**`Generated`**

from field: uint64 ref_id = 1;

#### Defined in

src/inventory.scailo_pb.ts:809

___

### searchKey

• **searchKey**: `string` = `""`

Stores the search key

**`Generated`**

from field: string search_key = 5;

#### Defined in

src/inventory.scailo_pb.ts:816

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inventory.scailo_pb.ts:839

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inventory.scailo_pb.ts:837

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ReturnableInventorySearchReq"``

#### Defined in

src/inventory.scailo_pb.ts:838

## Methods

### clone

▸ **clone**(): [`ReturnableInventorySearchReq`](ReturnableInventorySearchReq.md)

Create a deep copy.

#### Returns

[`ReturnableInventorySearchReq`](ReturnableInventorySearchReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ReturnableInventorySearchReq`](ReturnableInventorySearchReq.md) \| `PlainMessage`\<[`ReturnableInventorySearchReq`](ReturnableInventorySearchReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ReturnableInventorySearchReq`](ReturnableInventorySearchReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ReturnableInventorySearchReq`](ReturnableInventorySearchReq.md)\>

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
| `a` | `undefined` \| [`ReturnableInventorySearchReq`](ReturnableInventorySearchReq.md) \| `PlainMessage`\<[`ReturnableInventorySearchReq`](ReturnableInventorySearchReq.md)\> |
| `b` | `undefined` \| [`ReturnableInventorySearchReq`](ReturnableInventorySearchReq.md) \| `PlainMessage`\<[`ReturnableInventorySearchReq`](ReturnableInventorySearchReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/inventory.scailo_pb.ts:858

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ReturnableInventorySearchReq`](ReturnableInventorySearchReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ReturnableInventorySearchReq`](ReturnableInventorySearchReq.md)

#### Defined in

src/inventory.scailo_pb.ts:846

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ReturnableInventorySearchReq`](ReturnableInventorySearchReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReturnableInventorySearchReq`](ReturnableInventorySearchReq.md)

#### Defined in

src/inventory.scailo_pb.ts:850

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ReturnableInventorySearchReq`](ReturnableInventorySearchReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReturnableInventorySearchReq`](ReturnableInventorySearchReq.md)

#### Defined in

src/inventory.scailo_pb.ts:854
