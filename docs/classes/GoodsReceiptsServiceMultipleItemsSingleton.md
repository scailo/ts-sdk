[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsReceiptsServiceMultipleItemsSingleton

# Class: GoodsReceiptsServiceMultipleItemsSingleton

Describes the parameters required to add an individual item as part of multiple item addition to a goods receipt

**`Generated`**

from message Scailo.GoodsReceiptsServiceMultipleItemsSingleton

## Hierarchy

- `Message`\<[`GoodsReceiptsServiceMultipleItemsSingleton`](GoodsReceiptsServiceMultipleItemsSingleton.md)\>

  ↳ **`GoodsReceiptsServiceMultipleItemsSingleton`**

## Table of contents

### Constructors

- [constructor](GoodsReceiptsServiceMultipleItemsSingleton.md#constructor)

### Properties

- [familyId](GoodsReceiptsServiceMultipleItemsSingleton.md#familyid)
- [internalQuantity](GoodsReceiptsServiceMultipleItemsSingleton.md#internalquantity)
- [specifications](GoodsReceiptsServiceMultipleItemsSingleton.md#specifications)
- [vendorQuantity](GoodsReceiptsServiceMultipleItemsSingleton.md#vendorquantity)
- [vendorUomId](GoodsReceiptsServiceMultipleItemsSingleton.md#vendoruomid)
- [fields](GoodsReceiptsServiceMultipleItemsSingleton.md#fields)
- [runtime](GoodsReceiptsServiceMultipleItemsSingleton.md#runtime)
- [typeName](GoodsReceiptsServiceMultipleItemsSingleton.md#typename)

### Methods

- [clone](GoodsReceiptsServiceMultipleItemsSingleton.md#clone)
- [equals](GoodsReceiptsServiceMultipleItemsSingleton.md#equals)
- [fromBinary](GoodsReceiptsServiceMultipleItemsSingleton.md#frombinary)
- [fromJson](GoodsReceiptsServiceMultipleItemsSingleton.md#fromjson)
- [fromJsonString](GoodsReceiptsServiceMultipleItemsSingleton.md#fromjsonstring)
- [getType](GoodsReceiptsServiceMultipleItemsSingleton.md#gettype)
- [toBinary](GoodsReceiptsServiceMultipleItemsSingleton.md#tobinary)
- [toJSON](GoodsReceiptsServiceMultipleItemsSingleton.md#tojson)
- [toJson](GoodsReceiptsServiceMultipleItemsSingleton.md#tojson-1)
- [toJsonString](GoodsReceiptsServiceMultipleItemsSingleton.md#tojsonstring)
- [equals](GoodsReceiptsServiceMultipleItemsSingleton.md#equals-1)
- [fromBinary](GoodsReceiptsServiceMultipleItemsSingleton.md#frombinary-1)
- [fromJson](GoodsReceiptsServiceMultipleItemsSingleton.md#fromjson-1)
- [fromJsonString](GoodsReceiptsServiceMultipleItemsSingleton.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsReceiptsServiceMultipleItemsSingleton**(`data?`): [`GoodsReceiptsServiceMultipleItemsSingleton`](GoodsReceiptsServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsReceiptsServiceMultipleItemsSingleton`](GoodsReceiptsServiceMultipleItemsSingleton.md)\> |

#### Returns

[`GoodsReceiptsServiceMultipleItemsSingleton`](GoodsReceiptsServiceMultipleItemsSingleton.md)

#### Overrides

Message\&lt;GoodsReceiptsServiceMultipleItemsSingleton\&gt;.constructor

#### Defined in

[src/goods_receipts.scailo_pb.ts:880](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/goods_receipts.scailo_pb.ts#L880)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/goods_receipts.scailo_pb.ts:850](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/goods_receipts.scailo_pb.ts#L850)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being admitted in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

[src/goods_receipts.scailo_pb.ts:857](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/goods_receipts.scailo_pb.ts#L857)

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 18;

#### Defined in

[src/goods_receipts.scailo_pb.ts:878](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/goods_receipts.scailo_pb.ts#L878)

___

### vendorQuantity

• **vendorQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being admitted in vendor's unit of material

**`Generated`**

from field: uint64 vendor_quantity = 14;

#### Defined in

[src/goods_receipts.scailo_pb.ts:871](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/goods_receipts.scailo_pb.ts#L871)

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 13;

#### Defined in

[src/goods_receipts.scailo_pb.ts:864](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/goods_receipts.scailo_pb.ts#L864)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_receipts.scailo_pb.ts:887](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/goods_receipts.scailo_pb.ts#L887)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_receipts.scailo_pb.ts:885](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/goods_receipts.scailo_pb.ts#L885)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsReceiptsServiceMultipleItemsSingleton"``

#### Defined in

[src/goods_receipts.scailo_pb.ts:886](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/goods_receipts.scailo_pb.ts#L886)

## Methods

### clone

▸ **clone**(): [`GoodsReceiptsServiceMultipleItemsSingleton`](GoodsReceiptsServiceMultipleItemsSingleton.md)

Create a deep copy.

#### Returns

[`GoodsReceiptsServiceMultipleItemsSingleton`](GoodsReceiptsServiceMultipleItemsSingleton.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsReceiptsServiceMultipleItemsSingleton`](GoodsReceiptsServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`GoodsReceiptsServiceMultipleItemsSingleton`](GoodsReceiptsServiceMultipleItemsSingleton.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsReceiptsServiceMultipleItemsSingleton`](GoodsReceiptsServiceMultipleItemsSingleton.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsReceiptsServiceMultipleItemsSingleton`](GoodsReceiptsServiceMultipleItemsSingleton.md)\>

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
| `a` | `undefined` \| [`GoodsReceiptsServiceMultipleItemsSingleton`](GoodsReceiptsServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`GoodsReceiptsServiceMultipleItemsSingleton`](GoodsReceiptsServiceMultipleItemsSingleton.md)\> |
| `b` | `undefined` \| [`GoodsReceiptsServiceMultipleItemsSingleton`](GoodsReceiptsServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`GoodsReceiptsServiceMultipleItemsSingleton`](GoodsReceiptsServiceMultipleItemsSingleton.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_receipts.scailo_pb.ts:907](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/goods_receipts.scailo_pb.ts#L907)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsReceiptsServiceMultipleItemsSingleton`](GoodsReceiptsServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceMultipleItemsSingleton`](GoodsReceiptsServiceMultipleItemsSingleton.md)

#### Defined in

[src/goods_receipts.scailo_pb.ts:895](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/goods_receipts.scailo_pb.ts#L895)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptsServiceMultipleItemsSingleton`](GoodsReceiptsServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceMultipleItemsSingleton`](GoodsReceiptsServiceMultipleItemsSingleton.md)

#### Defined in

[src/goods_receipts.scailo_pb.ts:899](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/goods_receipts.scailo_pb.ts#L899)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptsServiceMultipleItemsSingleton`](GoodsReceiptsServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceMultipleItemsSingleton`](GoodsReceiptsServiceMultipleItemsSingleton.md)

#### Defined in

[src/goods_receipts.scailo_pb.ts:903](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/goods_receipts.scailo_pb.ts#L903)
