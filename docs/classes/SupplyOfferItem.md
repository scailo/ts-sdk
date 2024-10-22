[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SupplyOfferItem

# Class: SupplyOfferItem

Describes the parameters that constitute an item associated to a supply offer

**`Generated`**

from message Scailo.SupplyOfferItem

## Hierarchy

- `Message`\<[`SupplyOfferItem`](SupplyOfferItem.md)\>

  ↳ **`SupplyOfferItem`**

## Table of contents

### Constructors

- [constructor](SupplyOfferItem.md#constructor)

### Properties

- [approvalMetadata](SupplyOfferItem.md#approvalmetadata)
- [deliveryDate](SupplyOfferItem.md#deliverydate)
- [discount](SupplyOfferItem.md#discount)
- [discountedVendorUnitPrice](SupplyOfferItem.md#discountedvendorunitprice)
- [entityUuid](SupplyOfferItem.md#entityuuid)
- [familyId](SupplyOfferItem.md#familyid)
- [internalQuantity](SupplyOfferItem.md#internalquantity)
- [metadata](SupplyOfferItem.md#metadata)
- [needApproval](SupplyOfferItem.md#needapproval)
- [specifications](SupplyOfferItem.md#specifications)
- [supplyOfferId](SupplyOfferItem.md#supplyofferid)
- [taxGroupId](SupplyOfferItem.md#taxgroupid)
- [userComment](SupplyOfferItem.md#usercomment)
- [vendorQuantity](SupplyOfferItem.md#vendorquantity)
- [vendorUnitPrice](SupplyOfferItem.md#vendorunitprice)
- [vendorUomId](SupplyOfferItem.md#vendoruomid)
- [fields](SupplyOfferItem.md#fields)
- [runtime](SupplyOfferItem.md#runtime)
- [typeName](SupplyOfferItem.md#typename)

### Methods

- [clone](SupplyOfferItem.md#clone)
- [equals](SupplyOfferItem.md#equals)
- [fromBinary](SupplyOfferItem.md#frombinary)
- [fromJson](SupplyOfferItem.md#fromjson)
- [fromJsonString](SupplyOfferItem.md#fromjsonstring)
- [getType](SupplyOfferItem.md#gettype)
- [toBinary](SupplyOfferItem.md#tobinary)
- [toJSON](SupplyOfferItem.md#tojson)
- [toJson](SupplyOfferItem.md#tojson-1)
- [toJsonString](SupplyOfferItem.md#tojsonstring)
- [equals](SupplyOfferItem.md#equals-1)
- [fromBinary](SupplyOfferItem.md#frombinary-1)
- [fromJson](SupplyOfferItem.md#fromjson-1)
- [fromJsonString](SupplyOfferItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new SupplyOfferItem**(`data?`): [`SupplyOfferItem`](SupplyOfferItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SupplyOfferItem`](SupplyOfferItem.md)\> |

#### Returns

[`SupplyOfferItem`](SupplyOfferItem.md)

#### Overrides

Message\&lt;SupplyOfferItem\&gt;.constructor

#### Defined in

src/supply_offers.scailo_pb.ts:1313

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/supply_offers.scailo_pb.ts:1220

___

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date of the item

**`Generated`**

from field: string delivery_date = 18;

#### Defined in

src/supply_offers.scailo_pb.ts:1297

___

### discount

• **discount**: `bigint` = `protoInt64.zero`

The applicable discount percentage (in cents)

**`Generated`**

from field: uint64 discount = 17;

#### Defined in

src/supply_offers.scailo_pb.ts:1290

___

### discountedVendorUnitPrice

• **discountedVendorUnitPrice**: `bigint` = `protoInt64.zero`

Stores the vendor unit price after factoring in the discount

**`Generated`**

from field: uint64 discounted_vendor_unit_price = 30;

#### Defined in

src/supply_offers.scailo_pb.ts:1311

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/supply_offers.scailo_pb.ts:1206

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/supply_offers.scailo_pb.ts:1248

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being ordered in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

src/supply_offers.scailo_pb.ts:1255

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this supply offer

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/supply_offers.scailo_pb.ts:1213

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

src/supply_offers.scailo_pb.ts:1227

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 19;

#### Defined in

src/supply_offers.scailo_pb.ts:1304

___

### supplyOfferId

• **supplyOfferId**: `bigint` = `protoInt64.zero`

Stores the supply offer ID

**`Generated`**

from field: uint64 supply_offer_id = 10;

#### Defined in

src/supply_offers.scailo_pb.ts:1241

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 16;

#### Defined in

src/supply_offers.scailo_pb.ts:1283

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/supply_offers.scailo_pb.ts:1234

___

### vendorQuantity

• **vendorQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being ordered in vendor's unit of material

**`Generated`**

from field: uint64 vendor_quantity = 14;

#### Defined in

src/supply_offers.scailo_pb.ts:1269

___

### vendorUnitPrice

• **vendorUnitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item (as supplied by the vendor)

**`Generated`**

from field: uint64 vendor_unit_price = 15;

#### Defined in

src/supply_offers.scailo_pb.ts:1276

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 13;

#### Defined in

src/supply_offers.scailo_pb.ts:1262

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/supply_offers.scailo_pb.ts:1320

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/supply_offers.scailo_pb.ts:1318

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SupplyOfferItem"``

#### Defined in

src/supply_offers.scailo_pb.ts:1319

## Methods

### clone

▸ **clone**(): [`SupplyOfferItem`](SupplyOfferItem.md)

Create a deep copy.

#### Returns

[`SupplyOfferItem`](SupplyOfferItem.md)

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
| `other` | `undefined` \| ``null`` \| [`SupplyOfferItem`](SupplyOfferItem.md) \| `PlainMessage`\<[`SupplyOfferItem`](SupplyOfferItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`SupplyOfferItem`](SupplyOfferItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SupplyOfferItem`](SupplyOfferItem.md)\>

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
| `a` | `undefined` \| [`SupplyOfferItem`](SupplyOfferItem.md) \| `PlainMessage`\<[`SupplyOfferItem`](SupplyOfferItem.md)\> |
| `b` | `undefined` \| [`SupplyOfferItem`](SupplyOfferItem.md) \| `PlainMessage`\<[`SupplyOfferItem`](SupplyOfferItem.md)\> |

#### Returns

`boolean`

#### Defined in

src/supply_offers.scailo_pb.ts:1351

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SupplyOfferItem`](SupplyOfferItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SupplyOfferItem`](SupplyOfferItem.md)

#### Defined in

src/supply_offers.scailo_pb.ts:1339

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SupplyOfferItem`](SupplyOfferItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOfferItem`](SupplyOfferItem.md)

#### Defined in

src/supply_offers.scailo_pb.ts:1343

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SupplyOfferItem`](SupplyOfferItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOfferItem`](SupplyOfferItem.md)

#### Defined in

src/supply_offers.scailo_pb.ts:1347
