[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesPaymentsServiceFilterReq

# Class: PurchasesPaymentsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.PurchasesPaymentsServiceFilterReq

## Hierarchy

- `Message`\<[`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md)\>

  ↳ **`PurchasesPaymentsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](PurchasesPaymentsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](PurchasesPaymentsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](PurchasesPaymentsServiceFilterReq.md#approvedonend)
- [approvedOnStart](PurchasesPaymentsServiceFilterReq.md#approvedonstart)
- [approverRoleId](PurchasesPaymentsServiceFilterReq.md#approverroleid)
- [bankAccountId](PurchasesPaymentsServiceFilterReq.md#bankaccountid)
- [completedOnEnd](PurchasesPaymentsServiceFilterReq.md#completedonend)
- [completedOnStart](PurchasesPaymentsServiceFilterReq.md#completedonstart)
- [count](PurchasesPaymentsServiceFilterReq.md#count)
- [creationTimestampEnd](PurchasesPaymentsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](PurchasesPaymentsServiceFilterReq.md#creationtimestampstart)
- [currencyId](PurchasesPaymentsServiceFilterReq.md#currencyid)
- [entityUuid](PurchasesPaymentsServiceFilterReq.md#entityuuid)
- [finalRefNumber](PurchasesPaymentsServiceFilterReq.md#finalrefnumber)
- [isActive](PurchasesPaymentsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](PurchasesPaymentsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](PurchasesPaymentsServiceFilterReq.md#modificationtimestampstart)
- [offset](PurchasesPaymentsServiceFilterReq.md#offset)
- [paymentTimestampEnd](PurchasesPaymentsServiceFilterReq.md#paymenttimestampend)
- [paymentTimestampStart](PurchasesPaymentsServiceFilterReq.md#paymenttimestampstart)
- [refFrom](PurchasesPaymentsServiceFilterReq.md#reffrom)
- [refId](PurchasesPaymentsServiceFilterReq.md#refid)
- [referenceId](PurchasesPaymentsServiceFilterReq.md#referenceid)
- [sortKey](PurchasesPaymentsServiceFilterReq.md#sortkey)
- [sortOrder](PurchasesPaymentsServiceFilterReq.md#sortorder)
- [status](PurchasesPaymentsServiceFilterReq.md#status)
- [transactionType](PurchasesPaymentsServiceFilterReq.md#transactiontype)
- [vendorId](PurchasesPaymentsServiceFilterReq.md#vendorid)
- [fields](PurchasesPaymentsServiceFilterReq.md#fields)
- [runtime](PurchasesPaymentsServiceFilterReq.md#runtime)
- [typeName](PurchasesPaymentsServiceFilterReq.md#typename)

### Methods

- [clone](PurchasesPaymentsServiceFilterReq.md#clone)
- [equals](PurchasesPaymentsServiceFilterReq.md#equals)
- [fromBinary](PurchasesPaymentsServiceFilterReq.md#frombinary)
- [fromJson](PurchasesPaymentsServiceFilterReq.md#fromjson)
- [fromJsonString](PurchasesPaymentsServiceFilterReq.md#fromjsonstring)
- [getType](PurchasesPaymentsServiceFilterReq.md#gettype)
- [toBinary](PurchasesPaymentsServiceFilterReq.md#tobinary)
- [toJSON](PurchasesPaymentsServiceFilterReq.md#tojson)
- [toJson](PurchasesPaymentsServiceFilterReq.md#tojson-1)
- [toJsonString](PurchasesPaymentsServiceFilterReq.md#tojsonstring)
- [equals](PurchasesPaymentsServiceFilterReq.md#equals-1)
- [fromBinary](PurchasesPaymentsServiceFilterReq.md#frombinary-1)
- [fromJson](PurchasesPaymentsServiceFilterReq.md#fromjson-1)
- [fromJsonString](PurchasesPaymentsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesPaymentsServiceFilterReq**(`data?`): [`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md)\> |

#### Returns

[`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md)

#### Overrides

Message\&lt;PurchasesPaymentsServiceFilterReq\&gt;.constructor

#### Defined in

[src/purchases_payments.scailo_pb.ts:1340](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_payments.scailo_pb.ts#L1340)

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

[src/purchases_payments.scailo_pb.ts:1202](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_payments.scailo_pb.ts#L1202)

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

[src/purchases_payments.scailo_pb.ts:1186](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_payments.scailo_pb.ts#L1186)

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

[src/purchases_payments.scailo_pb.ts:1170](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_payments.scailo_pb.ts#L1170)

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

[src/purchases_payments.scailo_pb.ts:1218](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_payments.scailo_pb.ts#L1218)

___

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

The ID of the associated bank account

**`Generated`**

from field: uint64 bank_account_id = 25;

#### Defined in

[src/purchases_payments.scailo_pb.ts:1310](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_payments.scailo_pb.ts#L1310)

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

[src/purchases_payments.scailo_pb.ts:1250](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_payments.scailo_pb.ts#L1250)

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

[src/purchases_payments.scailo_pb.ts:1234](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_payments.scailo_pb.ts#L1234)

___

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.

**`Example`**

```ts
100
```

**`Regex`**

^(?:-1|0|[1-9][0-9]*)$

**`Format`**

Must be -1 or any non-negative integer (>= -1).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/purchases_payments.scailo_pb.ts:1024](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_payments.scailo_pb.ts#L1024)

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

[src/purchases_payments.scailo_pb.ts:1094](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_payments.scailo_pb.ts#L1094)

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

[src/purchases_payments.scailo_pb.ts:1078](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_payments.scailo_pb.ts#L1078)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 26;

#### Defined in

[src/purchases_payments.scailo_pb.ts:1317](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_payments.scailo_pb.ts#L1317)

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

[src/purchases_payments.scailo_pb.ts:1142](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_payments.scailo_pb.ts#L1142)

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

[src/purchases_payments.scailo_pb.ts:1282](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_payments.scailo_pb.ts#L1282)

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

[src/purchases_payments.scailo_pb.ts:1008](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_payments.scailo_pb.ts#L1008)

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

[src/purchases_payments.scailo_pb.ts:1126](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_payments.scailo_pb.ts#L1126)

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

[src/purchases_payments.scailo_pb.ts:1110](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_payments.scailo_pb.ts#L1110)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Number of records to skip (offset) for pagination.

**`Example`**

```ts
0
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/purchases_payments.scailo_pb.ts:1040](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_payments.scailo_pb.ts#L1040)

___

### paymentTimestampEnd

• **paymentTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of the payment timestamp

**`Generated`**

from field: uint64 payment_timestamp_end = 29;

#### Defined in

[src/purchases_payments.scailo_pb.ts:1338](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_payments.scailo_pb.ts#L1338)

___

### paymentTimestampStart

• **paymentTimestampStart**: `bigint` = `protoInt64.zero`

The start range of the payment timestamp

**`Generated`**

from field: uint64 payment_timestamp_start = 28;

#### Defined in

[src/purchases_payments.scailo_pb.ts:1331](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_payments.scailo_pb.ts#L1331)

___

### refFrom

• **refFrom**: [`PURCHASE_PAYMENT_REF_FROM`](../enums/PURCHASE_PAYMENT_REF_FROM.md) = `PURCHASE_PAYMENT_REF_FROM.PURCHASE_PAYMENT_REF_FROM_ANY_UNSPECIFIED`

The reference on which the purchase payment has been created

**`Generated`**

from field: Scailo.PURCHASE_PAYMENT_REF_FROM ref_from = 22;

#### Defined in

[src/purchases_payments.scailo_pb.ts:1289](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_payments.scailo_pb.ts#L1289)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The ID of the associated reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/purchases_payments.scailo_pb.ts:1296](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_payments.scailo_pb.ts#L1296)

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

[src/purchases_payments.scailo_pb.ts:1266](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_payments.scailo_pb.ts#L1266)

___

### sortKey

• **sortKey**: [`PURCHASE_PAYMENT_SORT_KEY`](../enums/PURCHASE_PAYMENT_SORT_KEY.md) = `PURCHASE_PAYMENT_SORT_KEY.PURCHASE_PAYMENT_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.PURCHASE_PAYMENT_SORT_KEY sort_key = 5;

#### Defined in

[src/purchases_payments.scailo_pb.ts:1062](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_payments.scailo_pb.ts#L1062)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/purchases_payments.scailo_pb.ts:1052](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_payments.scailo_pb.ts#L1052)

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

[src/purchases_payments.scailo_pb.ts:1154](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_payments.scailo_pb.ts#L1154)

___

### transactionType

• **transactionType**: [`TRANSACTION_TYPE`](../enums/TRANSACTION_TYPE.md) = `TRANSACTION_TYPE.TRANSACTION_TYPE_ANY_UNSPECIFIED`

The type of the transaction

**`Generated`**

from field: Scailo.TRANSACTION_TYPE transaction_type = 27;

#### Defined in

[src/purchases_payments.scailo_pb.ts:1324](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_payments.scailo_pb.ts#L1324)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor

**`Generated`**

from field: uint64 vendor_id = 24;

#### Defined in

[src/purchases_payments.scailo_pb.ts:1303](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_payments.scailo_pb.ts#L1303)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_payments.scailo_pb.ts:1347](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_payments.scailo_pb.ts#L1347)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_payments.scailo_pb.ts:1345](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_payments.scailo_pb.ts#L1345)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesPaymentsServiceFilterReq"``

#### Defined in

[src/purchases_payments.scailo_pb.ts:1346](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_payments.scailo_pb.ts#L1346)

## Methods

### clone

▸ **clone**(): [`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md) \| `PlainMessage`\<[`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md) \| `PlainMessage`\<[`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md) \| `PlainMessage`\<[`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_payments.scailo_pb.ts:1389](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_payments.scailo_pb.ts#L1389)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md)

#### Defined in

[src/purchases_payments.scailo_pb.ts:1377](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_payments.scailo_pb.ts#L1377)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md)

#### Defined in

[src/purchases_payments.scailo_pb.ts:1381](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_payments.scailo_pb.ts#L1381)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md)

#### Defined in

[src/purchases_payments.scailo_pb.ts:1385](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_payments.scailo_pb.ts#L1385)
