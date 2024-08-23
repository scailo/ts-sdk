[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchaseReturnItem

# Class: PurchaseReturnItem

Describes the parameters that constitute an item associated to a purchase return

**`Generated`**

from message Scailo.PurchaseReturnItem

## Hierarchy

- `Message`\<[`PurchaseReturnItem`](PurchaseReturnItem.md)\>

  ↳ **`PurchaseReturnItem`**

## Table of contents

### Constructors

- [constructor](PurchaseReturnItem.md#constructor)

### Properties

- [approvalMetadata](PurchaseReturnItem.md#approvalmetadata)
- [entityUuid](PurchaseReturnItem.md#entityuuid)
- [familyId](PurchaseReturnItem.md#familyid)
- [internalQuantity](PurchaseReturnItem.md#internalquantity)
- [itemHash](PurchaseReturnItem.md#itemhash)
- [metadata](PurchaseReturnItem.md#metadata)
- [needApproval](PurchaseReturnItem.md#needapproval)
- [purchaseReturnId](PurchaseReturnItem.md#purchasereturnid)
- [userComment](PurchaseReturnItem.md#usercomment)
- [vendorQuantity](PurchaseReturnItem.md#vendorquantity)
- [vendorUomId](PurchaseReturnItem.md#vendoruomid)
- [fields](PurchaseReturnItem.md#fields)
- [runtime](PurchaseReturnItem.md#runtime)
- [typeName](PurchaseReturnItem.md#typename)

### Methods

- [clone](PurchaseReturnItem.md#clone)
- [equals](PurchaseReturnItem.md#equals)
- [fromBinary](PurchaseReturnItem.md#frombinary)
- [fromJson](PurchaseReturnItem.md#fromjson)
- [fromJsonString](PurchaseReturnItem.md#fromjsonstring)
- [getType](PurchaseReturnItem.md#gettype)
- [toBinary](PurchaseReturnItem.md#tobinary)
- [toJSON](PurchaseReturnItem.md#tojson)
- [toJson](PurchaseReturnItem.md#tojson-1)
- [toJsonString](PurchaseReturnItem.md#tojsonstring)
- [equals](PurchaseReturnItem.md#equals-1)
- [fromBinary](PurchaseReturnItem.md#frombinary-1)
- [fromJson](PurchaseReturnItem.md#fromjson-1)
- [fromJsonString](PurchaseReturnItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchaseReturnItem**(`data?`): [`PurchaseReturnItem`](PurchaseReturnItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchaseReturnItem`](PurchaseReturnItem.md)\> |

#### Returns

[`PurchaseReturnItem`](PurchaseReturnItem.md)

#### Overrides

Message\&lt;PurchaseReturnItem\&gt;.constructor

#### Defined in

src/purchases_returns.scailo_pb.ts:837

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/purchases_returns.scailo_pb.ts:779

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/purchases_returns.scailo_pb.ts:765

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/purchases_returns.scailo_pb.ts:807

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being dispatched in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

src/purchases_returns.scailo_pb.ts:821

___

### itemHash

• **itemHash**: `string` = `""`

Stores the item hash to be dispatched

**`Generated`**

from field: string item_hash = 12;

#### Defined in

src/purchases_returns.scailo_pb.ts:814

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this purchase return

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/purchases_returns.scailo_pb.ts:772

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

src/purchases_returns.scailo_pb.ts:786

___

### purchaseReturnId

• **purchaseReturnId**: `bigint` = `protoInt64.zero`

Stores the purchase return ID

**`Generated`**

from field: uint64 purchase_return_id = 10;

#### Defined in

src/purchases_returns.scailo_pb.ts:800

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/purchases_returns.scailo_pb.ts:793

___

### vendorQuantity

• **vendorQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being dispatched in vendor's unit of material

**`Generated`**

from field: uint64 vendor_quantity = 15;

#### Defined in

src/purchases_returns.scailo_pb.ts:835

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 14;

#### Defined in

src/purchases_returns.scailo_pb.ts:828

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_returns.scailo_pb.ts:844

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_returns.scailo_pb.ts:842

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchaseReturnItem"``

#### Defined in

src/purchases_returns.scailo_pb.ts:843

## Methods

### clone

▸ **clone**(): [`PurchaseReturnItem`](PurchaseReturnItem.md)

Create a deep copy.

#### Returns

[`PurchaseReturnItem`](PurchaseReturnItem.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchaseReturnItem`](PurchaseReturnItem.md) \| `PlainMessage`\<[`PurchaseReturnItem`](PurchaseReturnItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchaseReturnItem`](PurchaseReturnItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchaseReturnItem`](PurchaseReturnItem.md)\>

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
| `a` | `undefined` \| [`PurchaseReturnItem`](PurchaseReturnItem.md) \| `PlainMessage`\<[`PurchaseReturnItem`](PurchaseReturnItem.md)\> |
| `b` | `undefined` \| [`PurchaseReturnItem`](PurchaseReturnItem.md) \| `PlainMessage`\<[`PurchaseReturnItem`](PurchaseReturnItem.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_returns.scailo_pb.ts:870

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchaseReturnItem`](PurchaseReturnItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchaseReturnItem`](PurchaseReturnItem.md)

#### Defined in

src/purchases_returns.scailo_pb.ts:858

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchaseReturnItem`](PurchaseReturnItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseReturnItem`](PurchaseReturnItem.md)

#### Defined in

src/purchases_returns.scailo_pb.ts:862

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchaseReturnItem`](PurchaseReturnItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseReturnItem`](PurchaseReturnItem.md)

#### Defined in

src/purchases_returns.scailo_pb.ts:866
