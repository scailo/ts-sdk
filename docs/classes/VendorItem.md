[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorItem

# Class: VendorItem

Represents a full Vendor Item association within the system.
This message encapsulates the complete state of a vendor item relationship,
including catalog family mappings, core entity identifiers, unit price configurations,
and granular deviation limit metadata alongside order quantity constraints.

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

[src/vendors.scailo_pb.ts:1552](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1552)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/vendors.scailo_pb.ts:1398](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1398)

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

[src/vendors.scailo_pb.ts:1382](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1382)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the target family to which the item belongs.

**`Example`**

```ts
582
```

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/vendors.scailo_pb.ts:1440](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1440)

___

### maxOrderQty

• **maxOrderQty**: `bigint` = `protoInt64.zero`

**`Description`**

The maximum order quantity that can be placed, represented in cents. A value of 0 represents an unlimited maximum quantity.

**`Example`**

```ts
0
```

**`Generated`**

from field: uint64 max_order_qty = 21;

#### Defined in

[src/vendors.scailo_pb.ts:1540](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1540)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/vendors.scailo_pb.ts:1390](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1390)

___

### minOrderQty

• **minOrderQty**: `bigint` = `protoInt64.zero`

**`Description`**

The minimum order quantity that needs to be placed, represented in cents (where a value of 1 represents the absolute minimum increment of 0.01).

**`Example`**

```ts
100
```

**`Generated`**

from field: uint64 min_order_qty = 20;

#### Defined in

[src/vendors.scailo_pb.ts:1530](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1530)

___

### needApproval

• **needApproval**: `boolean` = `false`

**`Description`**

A boolean flag indicating whether this specific record requires further administrative approval.

**`Example`**

```ts
false
```

**`Format`**

Boolean true or false.

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/vendors.scailo_pb.ts:1410](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1410)

___

### price

• **price**: `bigint` = `protoInt64.zero`

**`Description`**

The unit price of the item as supplied by the vendor, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
1550
```

**`Generated`**

from field: uint64 price = 15;

#### Defined in

[src/vendors.scailo_pb.ts:1480](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1480)

___

### priceDeviationRelLowerLimitType

• **priceDeviationRelLowerLimitType**: [`VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE`](../enums/VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE.md) = `VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE.VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE_ANY_UNSPECIFIED`

**`Description`**

The relative lower limit type used to evaluate price deviation rules for the item.

**`Example`**

```ts
"VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE_PERCENTAGE"
```

**`Generated`**

from field: Scailo.VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE price_deviation_rel_lower_limit_type = 46;

#### Defined in

[src/vendors.scailo_pb.ts:1490](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1490)

___

### priceDeviationRelLowerLimitValue

• **priceDeviationRelLowerLimitValue**: `bigint` = `protoInt64.zero`

**`Description`**

The relative lower limit value on the price deviation of the item (in cents). For percentage, this is the percentage value; for absolute, this is the absolute value. If set to -1, the limit is ignored. The final lower limit of the item is computed as (price - price_deviation_rel_lower_limit_value).

**`Example`**

```ts
10
```

**`Generated`**

from field: int64 price_deviation_rel_lower_limit_value = 47;

#### Defined in

[src/vendors.scailo_pb.ts:1500](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1500)

___

### priceDeviationRelUpperLimitType

• **priceDeviationRelUpperLimitType**: [`VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE`](../enums/VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE.md) = `VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE.VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE_ANY_UNSPECIFIED`

**`Description`**

The relative upper limit type used to evaluate price deviation rules for the item.

**`Example`**

```ts
"VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE_ABSOLUTE"
```

**`Generated`**

from field: Scailo.VENDOR_ITEM_PRICE_DEVIATION_LIMIT_TYPE price_deviation_rel_upper_limit_type = 48;

#### Defined in

[src/vendors.scailo_pb.ts:1510](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1510)

___

### priceDeviationRelUpperLimitValue

• **priceDeviationRelUpperLimitValue**: `bigint` = `protoInt64.zero`

**`Description`**

The relative upper limit value on the price deviation of the item (in cents). For percentage, this is the percentage value; for absolute, this is the absolute value. If set to -1, the limit is ignored. The final upper limit of the item is computed as (price + price_deviation_rel_upper_limit_value).

**`Example`**

```ts
25
```

**`Generated`**

from field: int64 price_deviation_rel_upper_limit_value = 49;

#### Defined in

[src/vendors.scailo_pb.ts:1520](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1520)

___

### stepInterval

• **stepInterval**: `bigint` = `protoInt64.zero`

**`Description`**

The incremental unit step count by which the order quantity can be increased, represented in cents.

**`Example`**

```ts
50
```

**`Generated`**

from field: uint64 step_interval = 22;

#### Defined in

[src/vendors.scailo_pb.ts:1550](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1550)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the target tax group applied to this item.

**`Example`**

```ts
4
```

**`Generated`**

from field: uint64 tax_group_id = 14;

#### Defined in

[src/vendors.scailo_pb.ts:1470](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1470)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the target unit of material (UOM) associated with the item.

**`Example`**

```ts
12
```

**`Generated`**

from field: uint64 uom_id = 13;

#### Defined in

[src/vendors.scailo_pb.ts:1460](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1460)

___

### userComment

• **userComment**: `string` = `""`

**`Description`**

Audit log comment or justification captured during the last modification or transactional operation.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/vendors.scailo_pb.ts:1420](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1420)

___

### vendorFamilyCode

• **vendorFamilyCode**: `string` = `""`

**`Description`**

Stores the optional family code string as represented internally by the vendor.

**`Example`**

```ts
"VEND-FAM-XYZ-01"
```

**`Generated`**

from field: string vendor_family_code = 12;

#### Defined in

[src/vendors.scailo_pb.ts:1450](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1450)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the target vendor to which the item will be associated.

**`Example`**

```ts
1024
```

**`Generated`**

from field: uint64 vendor_id = 10;

#### Defined in

[src/vendors.scailo_pb.ts:1430](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1430)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendors.scailo_pb.ts:1559](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1559)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendors.scailo_pb.ts:1557](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1557)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorItem"``

#### Defined in

[src/vendors.scailo_pb.ts:1558](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1558)

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

[src/vendors.scailo_pb.ts:1592](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1592)

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

[src/vendors.scailo_pb.ts:1580](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1580)

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

[src/vendors.scailo_pb.ts:1584](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1584)

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

[src/vendors.scailo_pb.ts:1588](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L1588)
