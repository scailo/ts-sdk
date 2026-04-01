[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorItem

# Class: VendorItem

Describes the parameters that constitute an item associated to a vendor

**`Generated`**

from message Scailo.VendorItem

## Hierarchy

- `Message`\<[`VendorItem`](VendorItem.md)\>

  ↳ **`VendorItem`**

## Table of contents

### Constructors

- [constructor](VendorItem.md#constructor)

### Properties

- [approvalMetadata](VendorItem.md#approvalmetadata)
- [entityUuid](VendorItem.md#entityuuid)
- [familyId](VendorItem.md#familyid)
- [maxOrderQty](VendorItem.md#maxorderqty)
- [metadata](VendorItem.md#metadata)
- [minOrderQty](VendorItem.md#minorderqty)
- [needApproval](VendorItem.md#needapproval)
- [price](VendorItem.md#price)
- [priceDeviationRelLowerLimitType](VendorItem.md#pricedeviationrellowerlimittype)
- [priceDeviationRelLowerLimitValue](VendorItem.md#pricedeviationrellowerlimitvalue)
- [priceDeviationRelUpperLimitType](VendorItem.md#pricedeviationrelupperlimittype)
- [priceDeviationRelUpperLimitValue](VendorItem.md#pricedeviationrelupperlimitvalue)
- [stepInterval](VendorItem.md#stepinterval)
- [taxGroupId](VendorItem.md#taxgroupid)
- [uomId](VendorItem.md#uomid)
- [userComment](VendorItem.md#usercomment)
- [vendorFamilyCode](VendorItem.md#vendorfamilycode)
- [vendorId](VendorItem.md#vendorid)
- [fields](VendorItem.md#fields)
- [runtime](VendorItem.md#runtime)
- [typeName](VendorItem.md#typename)

### Methods

- [clone](VendorItem.md#clone)
- [equals](VendorItem.md#equals)
- [fromBinary](VendorItem.md#frombinary)
- [fromJson](VendorItem.md#fromjson)
- [fromJsonString](VendorItem.md#fromjsonstring)
- [getType](VendorItem.md#gettype)
- [toBinary](VendorItem.md#tobinary)
- [toJSON](VendorItem.md#tojson)
- [toJson](VendorItem.md#tojson-1)
- [toJsonString](VendorItem.md#tojsonstring)
- [equals](VendorItem.md#equals-1)
- [fromBinary](VendorItem.md#frombinary-1)
- [fromJson](VendorItem.md#fromjson-1)
- [fromJsonString](VendorItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorItem**(`data?`): [`VendorItem`](VendorItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorItem`](VendorItem.md)\> |

#### Returns

[`VendorItem`](VendorItem.md)

#### Overrides

Message\&lt;VendorItem\&gt;.constructor

#### Defined in

[src/vendors.scailo_pb.ts:1121](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendors.scailo_pb.ts#L1121)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/vendors.scailo_pb.ts:1013](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendors.scailo_pb.ts#L1013)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Description`**

The organization's globally unique identifier.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/vendors.scailo_pb.ts:997](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendors.scailo_pb.ts#L997)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/vendors.scailo_pb.ts:1042](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendors.scailo_pb.ts#L1042)

___

### maxOrderQty

• **maxOrderQty**: `bigint` = `protoInt64.zero`

The maximum order quantity that can be placed (in cents) (0 represents unlimited max quantity)

**`Generated`**

from field: uint64 max_order_qty = 21;

#### Defined in

[src/vendors.scailo_pb.ts:1112](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendors.scailo_pb.ts#L1112)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/vendors.scailo_pb.ts:1005](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendors.scailo_pb.ts#L1005)

___

### minOrderQty

• **minOrderQty**: `bigint` = `protoInt64.zero`

The minimum order quantity that needs to be placed (in cents) (0.01 is the minimum)

**`Generated`**

from field: uint64 min_order_qty = 20;

#### Defined in

[src/vendors.scailo_pb.ts:1105](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendors.scailo_pb.ts#L1105)

___

### needApproval

• **needApproval**: `boolean` = `false`

**`Description`**

The approval state of the record

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/vendors.scailo_pb.ts:1021](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendors.scailo_pb.ts#L1021)

___

### price

• **price**: `bigint` = `protoInt64.zero`

The unit price of the item (as supplied by the vendor)

**`Generated`**

from field: uint64 price = 15;

#### Defined in

[src/vendors.scailo_pb.ts:1070](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendors.scailo_pb.ts#L1070)

___

### priceDeviationRelLowerLimitType

• **priceDeviationRelLowerLimitType**: [`VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE`](../enums/VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE.md) = `VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE.VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE_ANY_UNSPECIFIED`

The relative lower limit type on the price deviation of the item

**`Generated`**

from field: Scailo.VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE price_deviation_rel_lower_limit_type = 46;

#### Defined in

[src/vendors.scailo_pb.ts:1077](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendors.scailo_pb.ts#L1077)

___

### priceDeviationRelLowerLimitValue

• **priceDeviationRelLowerLimitValue**: `bigint` = `protoInt64.zero`

The relative lower limit value on the price deviation of the item (in cents). For percentage, this is the percentage value; for absolute, this is the absolute value. If set to -1, the limit is ignored. The final lower limit of the item is computed as (price - price_deviation_rel_lower_limit_value)

**`Generated`**

from field: int64 price_deviation_rel_lower_limit_value = 47;

#### Defined in

[src/vendors.scailo_pb.ts:1084](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendors.scailo_pb.ts#L1084)

___

### priceDeviationRelUpperLimitType

• **priceDeviationRelUpperLimitType**: [`VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE`](../enums/VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE.md) = `VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE.VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE_ANY_UNSPECIFIED`

The relative upper limit type on the price deviation of the item

**`Generated`**

from field: Scailo.VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE price_deviation_rel_upper_limit_type = 48;

#### Defined in

[src/vendors.scailo_pb.ts:1091](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendors.scailo_pb.ts#L1091)

___

### priceDeviationRelUpperLimitValue

• **priceDeviationRelUpperLimitValue**: `bigint` = `protoInt64.zero`

The relative upper limit value on the price deviation of the item (in cents). For percentage, this is the percentage value; for absolute, this is the absolute value. If set to -1, the limit is ignored. The final upper limit of the item is computed as (price + price_deviation_rel_upper_limit_value)

**`Generated`**

from field: int64 price_deviation_rel_upper_limit_value = 49;

#### Defined in

[src/vendors.scailo_pb.ts:1098](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendors.scailo_pb.ts#L1098)

___

### stepInterval

• **stepInterval**: `bigint` = `protoInt64.zero`

The incremental count by which the order quantity can be increased (in cents)

**`Generated`**

from field: uint64 step_interval = 22;

#### Defined in

[src/vendors.scailo_pb.ts:1119](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendors.scailo_pb.ts#L1119)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 14;

#### Defined in

[src/vendors.scailo_pb.ts:1063](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendors.scailo_pb.ts#L1063)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

Stores the ID of the vendor's unit of material

**`Generated`**

from field: uint64 uom_id = 13;

#### Defined in

[src/vendors.scailo_pb.ts:1056](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendors.scailo_pb.ts#L1056)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/vendors.scailo_pb.ts:1028](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendors.scailo_pb.ts#L1028)

___

### vendorFamilyCode

• **vendorFamilyCode**: `string` = `""`

Stores the optional family code as represented by the vendor

**`Generated`**

from field: string vendor_family_code = 12;

#### Defined in

[src/vendors.scailo_pb.ts:1049](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendors.scailo_pb.ts#L1049)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

Stores the vendor ID

**`Generated`**

from field: uint64 vendor_id = 10;

#### Defined in

[src/vendors.scailo_pb.ts:1035](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendors.scailo_pb.ts#L1035)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendors.scailo_pb.ts:1128](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendors.scailo_pb.ts#L1128)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendors.scailo_pb.ts:1126](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendors.scailo_pb.ts#L1126)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorItem"``

#### Defined in

[src/vendors.scailo_pb.ts:1127](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendors.scailo_pb.ts#L1127)

## Methods

### clone

▸ **clone**(): [`VendorItem`](VendorItem.md)

Create a deep copy.

#### Returns

[`VendorItem`](VendorItem.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorItem`](VendorItem.md) \| `PlainMessage`\<[`VendorItem`](VendorItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorItem`](VendorItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorItem`](VendorItem.md)\>

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
| `a` | `undefined` \| [`VendorItem`](VendorItem.md) \| `PlainMessage`\<[`VendorItem`](VendorItem.md)\> |
| `b` | `undefined` \| [`VendorItem`](VendorItem.md) \| `PlainMessage`\<[`VendorItem`](VendorItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendors.scailo_pb.ts:1161](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendors.scailo_pb.ts#L1161)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorItem`](VendorItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorItem`](VendorItem.md)

#### Defined in

[src/vendors.scailo_pb.ts:1149](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendors.scailo_pb.ts#L1149)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorItem`](VendorItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorItem`](VendorItem.md)

#### Defined in

[src/vendors.scailo_pb.ts:1153](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendors.scailo_pb.ts#L1153)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorItem`](VendorItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorItem`](VendorItem.md)

#### Defined in

[src/vendors.scailo_pb.ts:1157](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/vendors.scailo_pb.ts#L1157)
