[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoicesServiceCountReq

# Class: SalesInvoicesServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.SalesInvoicesServiceCountReq

## Hierarchy

- `Message`\<[`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md)\>

  ↳ **`SalesInvoicesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](SalesInvoicesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](SalesInvoicesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](SalesInvoicesServiceCountReq.md#approvedonend)
- [approvedOnStart](SalesInvoicesServiceCountReq.md#approvedonstart)
- [approverRoleId](SalesInvoicesServiceCountReq.md#approverroleid)
- [bankAccountId](SalesInvoicesServiceCountReq.md#bankaccountid)
- [buyerClientId](SalesInvoicesServiceCountReq.md#buyerclientid)
- [completedOnEnd](SalesInvoicesServiceCountReq.md#completedonend)
- [completedOnStart](SalesInvoicesServiceCountReq.md#completedonstart)
- [consigneeClientId](SalesInvoicesServiceCountReq.md#consigneeclientid)
- [creationTimestampEnd](SalesInvoicesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](SalesInvoicesServiceCountReq.md#creationtimestampstart)
- [currencyId](SalesInvoicesServiceCountReq.md#currencyid)
- [entityUuid](SalesInvoicesServiceCountReq.md#entityuuid)
- [familyId](SalesInvoicesServiceCountReq.md#familyid)
- [finalRefNumber](SalesInvoicesServiceCountReq.md#finalrefnumber)
- [formData](SalesInvoicesServiceCountReq.md#formdata)
- [isActive](SalesInvoicesServiceCountReq.md#isactive)
- [modificationTimestampEnd](SalesInvoicesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](SalesInvoicesServiceCountReq.md#modificationtimestampstart)
- [projectId](SalesInvoicesServiceCountReq.md#projectid)
- [refFrom](SalesInvoicesServiceCountReq.md#reffrom)
- [refId](SalesInvoicesServiceCountReq.md#refid)
- [referenceId](SalesInvoicesServiceCountReq.md#referenceid)
- [status](SalesInvoicesServiceCountReq.md#status)
- [totalValueMax](SalesInvoicesServiceCountReq.md#totalvaluemax)
- [totalValueMin](SalesInvoicesServiceCountReq.md#totalvaluemin)
- [fields](SalesInvoicesServiceCountReq.md#fields)
- [runtime](SalesInvoicesServiceCountReq.md#runtime)
- [typeName](SalesInvoicesServiceCountReq.md#typename)

### Methods

- [clone](SalesInvoicesServiceCountReq.md#clone)
- [equals](SalesInvoicesServiceCountReq.md#equals)
- [fromBinary](SalesInvoicesServiceCountReq.md#frombinary)
- [fromJson](SalesInvoicesServiceCountReq.md#fromjson)
- [fromJsonString](SalesInvoicesServiceCountReq.md#fromjsonstring)
- [getType](SalesInvoicesServiceCountReq.md#gettype)
- [toBinary](SalesInvoicesServiceCountReq.md#tobinary)
- [toJSON](SalesInvoicesServiceCountReq.md#tojson)
- [toJson](SalesInvoicesServiceCountReq.md#tojson-1)
- [toJsonString](SalesInvoicesServiceCountReq.md#tojsonstring)
- [equals](SalesInvoicesServiceCountReq.md#equals-1)
- [fromBinary](SalesInvoicesServiceCountReq.md#frombinary-1)
- [fromJson](SalesInvoicesServiceCountReq.md#fromjson-1)
- [fromJsonString](SalesInvoicesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoicesServiceCountReq**(`data?`): [`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md)\> |

#### Returns

[`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md)

#### Overrides

Message\&lt;SalesInvoicesServiceCountReq\&gt;.constructor

#### Defined in

[src/sales_invoices.scailo_pb.ts:2769](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2769)

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

[src/sales_invoices.scailo_pb.ts:2609](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2609)

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

[src/sales_invoices.scailo_pb.ts:2593](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2593)

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

[src/sales_invoices.scailo_pb.ts:2577](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2577)

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

[src/sales_invoices.scailo_pb.ts:2625](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2625)

___

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

The associated ID of the bank account

**`Generated`**

from field: uint64 bank_account_id = 25;

#### Defined in

[src/sales_invoices.scailo_pb.ts:2717](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2717)

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID of the linked sales order

**`Generated`**

from field: uint64 buyer_client_id = 51;

#### Defined in

[src/sales_invoices.scailo_pb.ts:2739](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2739)

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

[src/sales_invoices.scailo_pb.ts:2657](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2657)

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

[src/sales_invoices.scailo_pb.ts:2641](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2641)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

Sales Order related filters
The associated consignee client ID of the linked sales order

**`Generated`**

from field: uint64 consignee_client_id = 50;

#### Defined in

[src/sales_invoices.scailo_pb.ts:2732](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2732)

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

[src/sales_invoices.scailo_pb.ts:2501](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2501)

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

[src/sales_invoices.scailo_pb.ts:2485](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2485)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 24;

#### Defined in

[src/sales_invoices.scailo_pb.ts:2710](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2710)

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

[src/sales_invoices.scailo_pb.ts:2549](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2549)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

[src/sales_invoices.scailo_pb.ts:2724](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2724)

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

[src/sales_invoices.scailo_pb.ts:2689](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2689)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/sales_invoices.scailo_pb.ts:2767](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2767)

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

[src/sales_invoices.scailo_pb.ts:2469](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2469)

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

[src/sales_invoices.scailo_pb.ts:2533](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2533)

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

[src/sales_invoices.scailo_pb.ts:2517](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2517)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project of the linked sales order

**`Generated`**

from field: uint64 project_id = 52;

#### Defined in

[src/sales_invoices.scailo_pb.ts:2746](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2746)

___

### refFrom

• **refFrom**: [`SALES_INVOICE_REF_FROM`](../enums/SALES_INVOICE_REF_FROM.md) = `SALES_INVOICE_REF_FROM.SALES_INVOICE_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.SALES_INVOICE_REF_FROM ref_from = 22;

#### Defined in

[src/sales_invoices.scailo_pb.ts:2696](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2696)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/sales_invoices.scailo_pb.ts:2703](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2703)

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

[src/sales_invoices.scailo_pb.ts:2673](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2673)

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

[src/sales_invoices.scailo_pb.ts:2561](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2561)

___

### totalValueMax

• **totalValueMax**: `bigint` = `protoInt64.zero`

Stores the maximum value of the sales invoice (ignored if 0)

**`Generated`**

from field: uint64 total_value_max = 71;

#### Defined in

[src/sales_invoices.scailo_pb.ts:2760](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2760)

___

### totalValueMin

• **totalValueMin**: `bigint` = `protoInt64.zero`

Stores the minimum value of the sales invoice (ignored if 0)

**`Generated`**

from field: uint64 total_value_min = 70;

#### Defined in

[src/sales_invoices.scailo_pb.ts:2753](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2753)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_invoices.scailo_pb.ts:2776](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2776)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_invoices.scailo_pb.ts:2774](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2774)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoicesServiceCountReq"``

#### Defined in

[src/sales_invoices.scailo_pb.ts:2775](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2775)

## Methods

### clone

▸ **clone**(): [`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md)

Create a deep copy.

#### Returns

[`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md) \| `PlainMessage`\<[`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md) \| `PlainMessage`\<[`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md)\> |
| `b` | `undefined` \| [`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md) \| `PlainMessage`\<[`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_invoices.scailo_pb.ts:2817](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2817)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:2805](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2805)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:2809](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2809)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceCountReq`](SalesInvoicesServiceCountReq.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:2813](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2813)
