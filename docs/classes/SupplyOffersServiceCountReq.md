[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SupplyOffersServiceCountReq

# Class: SupplyOffersServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.SupplyOffersServiceCountReq

## Hierarchy

- `Message`\<[`SupplyOffersServiceCountReq`](SupplyOffersServiceCountReq.md)\>

  ↳ **`SupplyOffersServiceCountReq`**

## Table of contents

### Constructors

- [constructor](SupplyOffersServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](SupplyOffersServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](SupplyOffersServiceCountReq.md#approvedonend)
- [approvedOnStart](SupplyOffersServiceCountReq.md#approvedonstart)
- [approverRoleId](SupplyOffersServiceCountReq.md#approverroleid)
- [buyerLocationId](SupplyOffersServiceCountReq.md#buyerlocationid)
- [completedOnEnd](SupplyOffersServiceCountReq.md#completedonend)
- [completedOnStart](SupplyOffersServiceCountReq.md#completedonstart)
- [consigneeLocationId](SupplyOffersServiceCountReq.md#consigneelocationid)
- [creationTimestampEnd](SupplyOffersServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](SupplyOffersServiceCountReq.md#creationtimestampstart)
- [currencyId](SupplyOffersServiceCountReq.md#currencyid)
- [deliveryDateEnd](SupplyOffersServiceCountReq.md#deliverydateend)
- [deliveryDateExact](SupplyOffersServiceCountReq.md#deliverydateexact)
- [deliveryDateStart](SupplyOffersServiceCountReq.md#deliverydatestart)
- [entityUuid](SupplyOffersServiceCountReq.md#entityuuid)
- [familyId](SupplyOffersServiceCountReq.md#familyid)
- [finalRefNumber](SupplyOffersServiceCountReq.md#finalrefnumber)
- [isActive](SupplyOffersServiceCountReq.md#isactive)
- [modificationTimestampEnd](SupplyOffersServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](SupplyOffersServiceCountReq.md#modificationtimestampstart)
- [projectId](SupplyOffersServiceCountReq.md#projectid)
- [referenceId](SupplyOffersServiceCountReq.md#referenceid)
- [status](SupplyOffersServiceCountReq.md#status)
- [totalValueMax](SupplyOffersServiceCountReq.md#totalvaluemax)
- [totalValueMin](SupplyOffersServiceCountReq.md#totalvaluemin)
- [vendorId](SupplyOffersServiceCountReq.md#vendorid)
- [fields](SupplyOffersServiceCountReq.md#fields)
- [runtime](SupplyOffersServiceCountReq.md#runtime)
- [typeName](SupplyOffersServiceCountReq.md#typename)

### Methods

- [clone](SupplyOffersServiceCountReq.md#clone)
- [equals](SupplyOffersServiceCountReq.md#equals)
- [fromBinary](SupplyOffersServiceCountReq.md#frombinary)
- [fromJson](SupplyOffersServiceCountReq.md#fromjson)
- [fromJsonString](SupplyOffersServiceCountReq.md#fromjsonstring)
- [getType](SupplyOffersServiceCountReq.md#gettype)
- [toBinary](SupplyOffersServiceCountReq.md#tobinary)
- [toJSON](SupplyOffersServiceCountReq.md#tojson)
- [toJson](SupplyOffersServiceCountReq.md#tojson-1)
- [toJsonString](SupplyOffersServiceCountReq.md#tojsonstring)
- [equals](SupplyOffersServiceCountReq.md#equals-1)
- [fromBinary](SupplyOffersServiceCountReq.md#frombinary-1)
- [fromJson](SupplyOffersServiceCountReq.md#fromjson-1)
- [fromJsonString](SupplyOffersServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SupplyOffersServiceCountReq**(`data?`): [`SupplyOffersServiceCountReq`](SupplyOffersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SupplyOffersServiceCountReq`](SupplyOffersServiceCountReq.md)\> |

#### Returns

[`SupplyOffersServiceCountReq`](SupplyOffersServiceCountReq.md)

#### Overrides

Message\&lt;SupplyOffersServiceCountReq\&gt;.constructor

#### Defined in

src/supply_offers.scailo_pb.ts:2159

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/supply_offers.scailo_pb.ts:2045

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/supply_offers.scailo_pb.ts:2038

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/supply_offers.scailo_pb.ts:2031

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/supply_offers.scailo_pb.ts:2052

___

### buyerLocationId

• **buyerLocationId**: `bigint` = `protoInt64.zero`

The associated buyer location ID

**`Generated`**

from field: uint64 buyer_location_id = 23;

#### Defined in

src/supply_offers.scailo_pb.ts:2094

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/supply_offers.scailo_pb.ts:2066

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/supply_offers.scailo_pb.ts:2059

___

### consigneeLocationId

• **consigneeLocationId**: `bigint` = `protoInt64.zero`

The associated consignee location ID

**`Generated`**

from field: uint64 consignee_location_id = 22;

#### Defined in

src/supply_offers.scailo_pb.ts:2087

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/supply_offers.scailo_pb.ts:1996

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/supply_offers.scailo_pb.ts:1989

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 25;

#### Defined in

src/supply_offers.scailo_pb.ts:2108

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of the item in the supply offer

**`Generated`**

from field: string delivery_date_end = 43;

#### Defined in

src/supply_offers.scailo_pb.ts:2143

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of the item in the supply offer

**`Generated`**

from field: string delivery_date_exact = 41;

#### Defined in

src/supply_offers.scailo_pb.ts:2129

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of the item in the supply offer

**`Generated`**

from field: string delivery_date_start = 42;

#### Defined in

src/supply_offers.scailo_pb.ts:2136

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/supply_offers.scailo_pb.ts:2017

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

src/supply_offers.scailo_pb.ts:2122

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/supply_offers.scailo_pb.ts:2080

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/supply_offers.scailo_pb.ts:1982

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/supply_offers.scailo_pb.ts:2010

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/supply_offers.scailo_pb.ts:2003

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 26;

#### Defined in

src/supply_offers.scailo_pb.ts:2115

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the supply offer

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/supply_offers.scailo_pb.ts:2073

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this supply offer

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/supply_offers.scailo_pb.ts:2024

___

### totalValueMax

• **totalValueMax**: `bigint` = `protoInt64.zero`

Stores the maximum value of the supply offer (ignored if 0)

**`Generated`**

from field: uint64 total_value_max = 51;

#### Defined in

src/supply_offers.scailo_pb.ts:2157

___

### totalValueMin

• **totalValueMin**: `bigint` = `protoInt64.zero`

Stores the minimum value of the supply offer (ignored if 0)

**`Generated`**

from field: uint64 total_value_min = 50;

#### Defined in

src/supply_offers.scailo_pb.ts:2150

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor

**`Generated`**

from field: uint64 vendor_id = 24;

#### Defined in

src/supply_offers.scailo_pb.ts:2101

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/supply_offers.scailo_pb.ts:2166

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/supply_offers.scailo_pb.ts:2164

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SupplyOffersServiceCountReq"``

#### Defined in

src/supply_offers.scailo_pb.ts:2165

## Methods

### clone

▸ **clone**(): [`SupplyOffersServiceCountReq`](SupplyOffersServiceCountReq.md)

Create a deep copy.

#### Returns

[`SupplyOffersServiceCountReq`](SupplyOffersServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SupplyOffersServiceCountReq`](SupplyOffersServiceCountReq.md) \| `PlainMessage`\<[`SupplyOffersServiceCountReq`](SupplyOffersServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SupplyOffersServiceCountReq`](SupplyOffersServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SupplyOffersServiceCountReq`](SupplyOffersServiceCountReq.md)\>

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
| `a` | `undefined` \| [`SupplyOffersServiceCountReq`](SupplyOffersServiceCountReq.md) \| `PlainMessage`\<[`SupplyOffersServiceCountReq`](SupplyOffersServiceCountReq.md)\> |
| `b` | `undefined` \| [`SupplyOffersServiceCountReq`](SupplyOffersServiceCountReq.md) \| `PlainMessage`\<[`SupplyOffersServiceCountReq`](SupplyOffersServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/supply_offers.scailo_pb.ts:2207

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SupplyOffersServiceCountReq`](SupplyOffersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SupplyOffersServiceCountReq`](SupplyOffersServiceCountReq.md)

#### Defined in

src/supply_offers.scailo_pb.ts:2195

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SupplyOffersServiceCountReq`](SupplyOffersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOffersServiceCountReq`](SupplyOffersServiceCountReq.md)

#### Defined in

src/supply_offers.scailo_pb.ts:2199

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SupplyOffersServiceCountReq`](SupplyOffersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOffersServiceCountReq`](SupplyOffersServiceCountReq.md)

#### Defined in

src/supply_offers.scailo_pb.ts:2203
