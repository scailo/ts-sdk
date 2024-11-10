[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsReceiptItem

# Class: GoodsReceiptItem

Describes the parameters that constitute an item associated to a goods receipt

**`Generated`**

from message Scailo.GoodsReceiptItem

## Hierarchy

- `Message`\<[`GoodsReceiptItem`](GoodsReceiptItem.md)\>

  ↳ **`GoodsReceiptItem`**

## Table of contents

### Constructors

- [constructor](GoodsReceiptItem.md#constructor)

### Properties

- [approvalMetadata](GoodsReceiptItem.md#approvalmetadata)
- [entityUuid](GoodsReceiptItem.md#entityuuid)
- [familyId](GoodsReceiptItem.md#familyid)
- [familyUuid](GoodsReceiptItem.md#familyuuid)
- [goodsReceiptId](GoodsReceiptItem.md#goodsreceiptid)
- [goodsReceiptUuid](GoodsReceiptItem.md#goodsreceiptuuid)
- [internalQuantity](GoodsReceiptItem.md#internalquantity)
- [metadata](GoodsReceiptItem.md#metadata)
- [needApproval](GoodsReceiptItem.md#needapproval)
- [userComment](GoodsReceiptItem.md#usercomment)
- [vendorQuantity](GoodsReceiptItem.md#vendorquantity)
- [vendorUomId](GoodsReceiptItem.md#vendoruomid)
- [fields](GoodsReceiptItem.md#fields)
- [runtime](GoodsReceiptItem.md#runtime)
- [typeName](GoodsReceiptItem.md#typename)

### Methods

- [clone](GoodsReceiptItem.md#clone)
- [equals](GoodsReceiptItem.md#equals)
- [fromBinary](GoodsReceiptItem.md#frombinary)
- [fromJson](GoodsReceiptItem.md#fromjson)
- [fromJsonString](GoodsReceiptItem.md#fromjsonstring)
- [getType](GoodsReceiptItem.md#gettype)
- [toBinary](GoodsReceiptItem.md#tobinary)
- [toJSON](GoodsReceiptItem.md#tojson)
- [toJson](GoodsReceiptItem.md#tojson-1)
- [toJsonString](GoodsReceiptItem.md#tojsonstring)
- [equals](GoodsReceiptItem.md#equals-1)
- [fromBinary](GoodsReceiptItem.md#frombinary-1)
- [fromJson](GoodsReceiptItem.md#fromjson-1)
- [fromJsonString](GoodsReceiptItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsReceiptItem**(`data?`): [`GoodsReceiptItem`](GoodsReceiptItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsReceiptItem`](GoodsReceiptItem.md)\> |

#### Returns

[`GoodsReceiptItem`](GoodsReceiptItem.md)

#### Overrides

Message\&lt;GoodsReceiptItem\&gt;.constructor

#### Defined in

src/goods_receipts.scailo_pb.ts:971

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/goods_receipts.scailo_pb.ts:903

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/goods_receipts.scailo_pb.ts:889

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/goods_receipts.scailo_pb.ts:931

___

### familyUuid

• **familyUuid**: `string` = `""`

The UUID of the associated family

----------------------------------------

**`Generated`**

from field: string family_uuid = 111;

#### Defined in

src/goods_receipts.scailo_pb.ts:969

___

### goodsReceiptId

• **goodsReceiptId**: `bigint` = `protoInt64.zero`

Stores the goods receipt ID

**`Generated`**

from field: uint64 goods_receipt_id = 10;

#### Defined in

src/goods_receipts.scailo_pb.ts:924

___

### goodsReceiptUuid

• **goodsReceiptUuid**: `string` = `""`

----------------------------------------
The UUID of the associated goods receipt

**`Generated`**

from field: string goods_receipt_uuid = 110;

#### Defined in

src/goods_receipts.scailo_pb.ts:960

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being admitted in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

src/goods_receipts.scailo_pb.ts:938

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this goods receipt

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/goods_receipts.scailo_pb.ts:896

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

src/goods_receipts.scailo_pb.ts:910

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/goods_receipts.scailo_pb.ts:917

___

### vendorQuantity

• **vendorQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being admitted in vendor's unit of material

**`Generated`**

from field: uint64 vendor_quantity = 14;

#### Defined in

src/goods_receipts.scailo_pb.ts:952

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 13;

#### Defined in

src/goods_receipts.scailo_pb.ts:945

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/goods_receipts.scailo_pb.ts:978

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/goods_receipts.scailo_pb.ts:976

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsReceiptItem"``

#### Defined in

src/goods_receipts.scailo_pb.ts:977

## Methods

### clone

▸ **clone**(): [`GoodsReceiptItem`](GoodsReceiptItem.md)

Create a deep copy.

#### Returns

[`GoodsReceiptItem`](GoodsReceiptItem.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsReceiptItem`](GoodsReceiptItem.md) \| `PlainMessage`\<[`GoodsReceiptItem`](GoodsReceiptItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsReceiptItem`](GoodsReceiptItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsReceiptItem`](GoodsReceiptItem.md)\>

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
| `a` | `undefined` \| [`GoodsReceiptItem`](GoodsReceiptItem.md) \| `PlainMessage`\<[`GoodsReceiptItem`](GoodsReceiptItem.md)\> |
| `b` | `undefined` \| [`GoodsReceiptItem`](GoodsReceiptItem.md) \| `PlainMessage`\<[`GoodsReceiptItem`](GoodsReceiptItem.md)\> |

#### Returns

`boolean`

#### Defined in

src/goods_receipts.scailo_pb.ts:1005

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsReceiptItem`](GoodsReceiptItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsReceiptItem`](GoodsReceiptItem.md)

#### Defined in

src/goods_receipts.scailo_pb.ts:993

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptItem`](GoodsReceiptItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptItem`](GoodsReceiptItem.md)

#### Defined in

src/goods_receipts.scailo_pb.ts:997

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptItem`](GoodsReceiptItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptItem`](GoodsReceiptItem.md)

#### Defined in

src/goods_receipts.scailo_pb.ts:1001
