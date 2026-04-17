[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchesServiceMultipleItemsSingleton

# Class: GoodsDispatchesServiceMultipleItemsSingleton

Describes the parameters required to add an individual item as part of multiple item addition to a goods dispatch

**`Generated`**

from message Scailo.GoodsDispatchesServiceMultipleItemsSingleton

## Hierarchy

- `Message`\<[`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)\>

  ↳ **`GoodsDispatchesServiceMultipleItemsSingleton`**

## Table of contents

### Constructors

- [constructor](GoodsDispatchesServiceMultipleItemsSingleton.md#constructor)

### Properties

- [clientFamilyCode](GoodsDispatchesServiceMultipleItemsSingleton.md#clientfamilycode)
- [clientQuantity](GoodsDispatchesServiceMultipleItemsSingleton.md#clientquantity)
- [clientUomId](GoodsDispatchesServiceMultipleItemsSingleton.md#clientuomid)
- [familyId](GoodsDispatchesServiceMultipleItemsSingleton.md#familyid)
- [internalQuantity](GoodsDispatchesServiceMultipleItemsSingleton.md#internalquantity)
- [itemHash](GoodsDispatchesServiceMultipleItemsSingleton.md#itemhash)
- [fields](GoodsDispatchesServiceMultipleItemsSingleton.md#fields)
- [runtime](GoodsDispatchesServiceMultipleItemsSingleton.md#runtime)
- [typeName](GoodsDispatchesServiceMultipleItemsSingleton.md#typename)

### Methods

- [clone](GoodsDispatchesServiceMultipleItemsSingleton.md#clone)
- [equals](GoodsDispatchesServiceMultipleItemsSingleton.md#equals)
- [fromBinary](GoodsDispatchesServiceMultipleItemsSingleton.md#frombinary)
- [fromJson](GoodsDispatchesServiceMultipleItemsSingleton.md#fromjson)
- [fromJsonString](GoodsDispatchesServiceMultipleItemsSingleton.md#fromjsonstring)
- [getType](GoodsDispatchesServiceMultipleItemsSingleton.md#gettype)
- [toBinary](GoodsDispatchesServiceMultipleItemsSingleton.md#tobinary)
- [toJSON](GoodsDispatchesServiceMultipleItemsSingleton.md#tojson)
- [toJson](GoodsDispatchesServiceMultipleItemsSingleton.md#tojson-1)
- [toJsonString](GoodsDispatchesServiceMultipleItemsSingleton.md#tojsonstring)
- [equals](GoodsDispatchesServiceMultipleItemsSingleton.md#equals-1)
- [fromBinary](GoodsDispatchesServiceMultipleItemsSingleton.md#frombinary-1)
- [fromJson](GoodsDispatchesServiceMultipleItemsSingleton.md#fromjson-1)
- [fromJsonString](GoodsDispatchesServiceMultipleItemsSingleton.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatchesServiceMultipleItemsSingleton**(`data?`): [`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)\> |

#### Returns

[`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)

#### Overrides

Message\&lt;GoodsDispatchesServiceMultipleItemsSingleton\&gt;.constructor

#### Defined in

[src/goods_dispatches.scailo_pb.ts:940](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L940)

## Properties

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as defined by the client

**`Generated`**

from field: string client_family_code = 16;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:938](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L938)

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being dispatched in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 15;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:931](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L931)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 14;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:924](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L924)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:903](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L903)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being dispatched in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:917](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L917)

___

### itemHash

• **itemHash**: `string` = `""`

Stores the item hash to be dispatched

**`Generated`**

from field: string item_hash = 12;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:910](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L910)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:947](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L947)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:945](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L945)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsDispatchesServiceMultipleItemsSingleton"``

#### Defined in

[src/goods_dispatches.scailo_pb.ts:946](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L946)

## Methods

### clone

▸ **clone**(): [`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)

Create a deep copy.

#### Returns

[`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)\>

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
| `a` | `undefined` \| [`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)\> |
| `b` | `undefined` \| [`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:968](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L968)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:956](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L956)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:960](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L960)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:964](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/goods_dispatches.scailo_pb.ts#L964)
