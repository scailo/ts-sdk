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
- [formData](SupplyOffersServiceCountReq.md#formdata)
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

[src/supply_offers.scailo_pb.ts:2606](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L2606)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter by the specific user ID who approved the records.

**`Example`**

```ts
501
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/supply_offers.scailo_pb.ts:2440](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L2440)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records approved ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/supply_offers.scailo_pb.ts:2424](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L2424)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records approved ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/supply_offers.scailo_pb.ts:2408](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L2408)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter by the role ID of the approver.

**`Example`**

```ts
5
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/supply_offers.scailo_pb.ts:2456](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L2456)

___

### buyerLocationId

• **buyerLocationId**: `bigint` = `protoInt64.zero`

The associated buyer location ID

**`Generated`**

from field: uint64 buyer_location_id = 23;

#### Defined in

[src/supply_offers.scailo_pb.ts:2534](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L2534)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records completed ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/supply_offers.scailo_pb.ts:2488](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L2488)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records completed ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/supply_offers.scailo_pb.ts:2472](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L2472)

___

### consigneeLocationId

• **consigneeLocationId**: `bigint` = `protoInt64.zero`

The associated consignee location ID

**`Generated`**

from field: uint64 consignee_location_id = 22;

#### Defined in

[src/supply_offers.scailo_pb.ts:2527](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L2527)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/supply_offers.scailo_pb.ts:2332](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L2332)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/supply_offers.scailo_pb.ts:2316](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L2316)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 25;

#### Defined in

[src/supply_offers.scailo_pb.ts:2548](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L2548)

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of the item in the supply offer

**`Generated`**

from field: string delivery_date_end = 43;

#### Defined in

[src/supply_offers.scailo_pb.ts:2583](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L2583)

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of the item in the supply offer

**`Generated`**

from field: string delivery_date_exact = 41;

#### Defined in

[src/supply_offers.scailo_pb.ts:2569](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L2569)

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of the item in the supply offer

**`Generated`**

from field: string delivery_date_start = 42;

#### Defined in

[src/supply_offers.scailo_pb.ts:2576](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L2576)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

Filter by the organization UUID.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/supply_offers.scailo_pb.ts:2380](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L2380)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

[src/supply_offers.scailo_pb.ts:2562](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L2562)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

**`Optional`**

**`Description`**

Fuzzy match for the system-generated ref number.

**`Example`**

```ts
"ABS-2023-X9Z2"
```

**`Regex`**

[0-9A-Za-z ]*$

@format: Alphanumeric characters and spaces only. Can be left empty.

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/supply_offers.scailo_pb.ts:2520](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L2520)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/supply_offers.scailo_pb.ts:2604](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L2604)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/supply_offers.scailo_pb.ts:2300](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L2300)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/supply_offers.scailo_pb.ts:2364](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L2364)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/supply_offers.scailo_pb.ts:2348](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L2348)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 26;

#### Defined in

[src/supply_offers.scailo_pb.ts:2555](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L2555)

___

### referenceId

• **referenceId**: `string` = `""`

**`Optional`**

**`Description`**

Fuzzy match for the user-defined reference ID.

**`Example`**

```ts
"ABS-2023-001"
```

**`Regex`**

[0-9A-Za-z ]*$

@format: Alphanumeric characters and spaces only. Can be left empty.

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/supply_offers.scailo_pb.ts:2504](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L2504)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/supply_offers.scailo_pb.ts:2392](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L2392)

___

### totalValueMax

• **totalValueMax**: `bigint` = `protoInt64.zero`

Stores the maximum value of the supply offer (ignored if 0)

**`Generated`**

from field: uint64 total_value_max = 51;

#### Defined in

[src/supply_offers.scailo_pb.ts:2597](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L2597)

___

### totalValueMin

• **totalValueMin**: `bigint` = `protoInt64.zero`

Stores the minimum value of the supply offer (ignored if 0)

**`Generated`**

from field: uint64 total_value_min = 50;

#### Defined in

[src/supply_offers.scailo_pb.ts:2590](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L2590)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor

**`Generated`**

from field: uint64 vendor_id = 24;

#### Defined in

[src/supply_offers.scailo_pb.ts:2541](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L2541)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/supply_offers.scailo_pb.ts:2613](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L2613)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/supply_offers.scailo_pb.ts:2611](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L2611)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SupplyOffersServiceCountReq"``

#### Defined in

[src/supply_offers.scailo_pb.ts:2612](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L2612)

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

[src/supply_offers.scailo_pb.ts:2655](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L2655)

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

[src/supply_offers.scailo_pb.ts:2643](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L2643)

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

[src/supply_offers.scailo_pb.ts:2647](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L2647)

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

[src/supply_offers.scailo_pb.ts:2651](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/supply_offers.scailo_pb.ts#L2651)
