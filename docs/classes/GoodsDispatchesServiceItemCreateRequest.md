[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchesServiceItemCreateRequest

# Class: GoodsDispatchesServiceItemCreateRequest

Describes the parameters required to add an item to a goods dispatch

**`Generated`**

from message Scailo.GoodsDispatchesServiceItemCreateRequest

## Hierarchy

- `Message`\<[`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md)\>

  ↳ **`GoodsDispatchesServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](GoodsDispatchesServiceItemCreateRequest.md#constructor)

### Properties

- [clientFamilyCode](GoodsDispatchesServiceItemCreateRequest.md#clientfamilycode)
- [clientQuantity](GoodsDispatchesServiceItemCreateRequest.md#clientquantity)
- [clientUomId](GoodsDispatchesServiceItemCreateRequest.md#clientuomid)
- [familyId](GoodsDispatchesServiceItemCreateRequest.md#familyid)
- [goodsDispatchId](GoodsDispatchesServiceItemCreateRequest.md#goodsdispatchid)
- [internalQuantity](GoodsDispatchesServiceItemCreateRequest.md#internalquantity)
- [itemHash](GoodsDispatchesServiceItemCreateRequest.md#itemhash)
- [userComment](GoodsDispatchesServiceItemCreateRequest.md#usercomment)
- [fields](GoodsDispatchesServiceItemCreateRequest.md#fields)
- [runtime](GoodsDispatchesServiceItemCreateRequest.md#runtime)
- [typeName](GoodsDispatchesServiceItemCreateRequest.md#typename)

### Methods

- [clone](GoodsDispatchesServiceItemCreateRequest.md#clone)
- [equals](GoodsDispatchesServiceItemCreateRequest.md#equals)
- [fromBinary](GoodsDispatchesServiceItemCreateRequest.md#frombinary)
- [fromJson](GoodsDispatchesServiceItemCreateRequest.md#fromjson)
- [fromJsonString](GoodsDispatchesServiceItemCreateRequest.md#fromjsonstring)
- [getType](GoodsDispatchesServiceItemCreateRequest.md#gettype)
- [toBinary](GoodsDispatchesServiceItemCreateRequest.md#tobinary)
- [toJSON](GoodsDispatchesServiceItemCreateRequest.md#tojson)
- [toJson](GoodsDispatchesServiceItemCreateRequest.md#tojson-1)
- [toJsonString](GoodsDispatchesServiceItemCreateRequest.md#tojsonstring)
- [equals](GoodsDispatchesServiceItemCreateRequest.md#equals-1)
- [fromBinary](GoodsDispatchesServiceItemCreateRequest.md#frombinary-1)
- [fromJson](GoodsDispatchesServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](GoodsDispatchesServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatchesServiceItemCreateRequest**(`data?`): [`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md)\> |

#### Returns

[`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md)

#### Overrides

Message\&lt;GoodsDispatchesServiceItemCreateRequest\&gt;.constructor

#### Defined in

src/goods_dispatches.scailo_pb.ts:760

## Properties

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as defined by the client

**`Generated`**

from field: string client_family_code = 16;

#### Defined in

src/goods_dispatches.scailo_pb.ts:758

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being dispatched in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 15;

#### Defined in

src/goods_dispatches.scailo_pb.ts:751

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 14;

#### Defined in

src/goods_dispatches.scailo_pb.ts:744

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/goods_dispatches.scailo_pb.ts:723

___

### goodsDispatchId

• **goodsDispatchId**: `bigint` = `protoInt64.zero`

Stores the goods dispatch ID

**`Generated`**

from field: uint64 goods_dispatch_id = 10;

#### Defined in

src/goods_dispatches.scailo_pb.ts:716

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being dispatched in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

src/goods_dispatches.scailo_pb.ts:737

___

### itemHash

• **itemHash**: `string` = `""`

Stores the item hash to be dispatched

**`Generated`**

from field: string item_hash = 12;

#### Defined in

src/goods_dispatches.scailo_pb.ts:730

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/goods_dispatches.scailo_pb.ts:709

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/goods_dispatches.scailo_pb.ts:767

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/goods_dispatches.scailo_pb.ts:765

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsDispatchesServiceItemCreateRequest"``

#### Defined in

src/goods_dispatches.scailo_pb.ts:766

## Methods

### clone

▸ **clone**(): [`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md) \| `PlainMessage`\<[`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md) \| `PlainMessage`\<[`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md) \| `PlainMessage`\<[`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/goods_dispatches.scailo_pb.ts:790

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md)

#### Defined in

src/goods_dispatches.scailo_pb.ts:778

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md)

#### Defined in

src/goods_dispatches.scailo_pb.ts:782

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceItemCreateRequest`](GoodsDispatchesServiceItemCreateRequest.md)

#### Defined in

src/goods_dispatches.scailo_pb.ts:786
