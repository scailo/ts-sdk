[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CreditNotesServiceCountReq

# Class: CreditNotesServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.CreditNotesServiceCountReq

## Hierarchy

- `Message`\<[`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md)\>

  ↳ **`CreditNotesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](CreditNotesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](CreditNotesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](CreditNotesServiceCountReq.md#approvedonend)
- [approvedOnStart](CreditNotesServiceCountReq.md#approvedonstart)
- [approverRoleId](CreditNotesServiceCountReq.md#approverroleid)
- [bankAccountId](CreditNotesServiceCountReq.md#bankaccountid)
- [buyerClientId](CreditNotesServiceCountReq.md#buyerclientid)
- [completedOnEnd](CreditNotesServiceCountReq.md#completedonend)
- [completedOnStart](CreditNotesServiceCountReq.md#completedonstart)
- [consigneeClientId](CreditNotesServiceCountReq.md#consigneeclientid)
- [creationTimestampEnd](CreditNotesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](CreditNotesServiceCountReq.md#creationtimestampstart)
- [currencyId](CreditNotesServiceCountReq.md#currencyid)
- [entityUuid](CreditNotesServiceCountReq.md#entityuuid)
- [familyId](CreditNotesServiceCountReq.md#familyid)
- [finalRefNumber](CreditNotesServiceCountReq.md#finalrefnumber)
- [formData](CreditNotesServiceCountReq.md#formdata)
- [isActive](CreditNotesServiceCountReq.md#isactive)
- [modificationTimestampEnd](CreditNotesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](CreditNotesServiceCountReq.md#modificationtimestampstart)
- [projectId](CreditNotesServiceCountReq.md#projectid)
- [refFrom](CreditNotesServiceCountReq.md#reffrom)
- [refId](CreditNotesServiceCountReq.md#refid)
- [referenceId](CreditNotesServiceCountReq.md#referenceid)
- [status](CreditNotesServiceCountReq.md#status)
- [totalValueMax](CreditNotesServiceCountReq.md#totalvaluemax)
- [totalValueMin](CreditNotesServiceCountReq.md#totalvaluemin)
- [fields](CreditNotesServiceCountReq.md#fields)
- [runtime](CreditNotesServiceCountReq.md#runtime)
- [typeName](CreditNotesServiceCountReq.md#typename)

### Methods

- [clone](CreditNotesServiceCountReq.md#clone)
- [equals](CreditNotesServiceCountReq.md#equals)
- [fromBinary](CreditNotesServiceCountReq.md#frombinary)
- [fromJson](CreditNotesServiceCountReq.md#fromjson)
- [fromJsonString](CreditNotesServiceCountReq.md#fromjsonstring)
- [getType](CreditNotesServiceCountReq.md#gettype)
- [toBinary](CreditNotesServiceCountReq.md#tobinary)
- [toJSON](CreditNotesServiceCountReq.md#tojson)
- [toJson](CreditNotesServiceCountReq.md#tojson-1)
- [toJsonString](CreditNotesServiceCountReq.md#tojsonstring)
- [equals](CreditNotesServiceCountReq.md#equals-1)
- [fromBinary](CreditNotesServiceCountReq.md#frombinary-1)
- [fromJson](CreditNotesServiceCountReq.md#fromjson-1)
- [fromJsonString](CreditNotesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new CreditNotesServiceCountReq**(`data?`): [`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md)\> |

#### Returns

[`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md)

#### Overrides

Message\&lt;CreditNotesServiceCountReq\&gt;.constructor

#### Defined in

[src/credit_notes.scailo_pb.ts:2908](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/credit_notes.scailo_pb.ts#L2908)

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

[src/credit_notes.scailo_pb.ts:2748](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/credit_notes.scailo_pb.ts#L2748)

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

[src/credit_notes.scailo_pb.ts:2732](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/credit_notes.scailo_pb.ts#L2732)

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

[src/credit_notes.scailo_pb.ts:2716](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/credit_notes.scailo_pb.ts#L2716)

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

[src/credit_notes.scailo_pb.ts:2764](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/credit_notes.scailo_pb.ts#L2764)

___

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

The associated ID of the bank account

**`Generated`**

from field: uint64 bank_account_id = 25;

#### Defined in

[src/credit_notes.scailo_pb.ts:2856](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/credit_notes.scailo_pb.ts#L2856)

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID of the linked sales order

**`Generated`**

from field: uint64 buyer_client_id = 51;

#### Defined in

[src/credit_notes.scailo_pb.ts:2878](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/credit_notes.scailo_pb.ts#L2878)

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

[src/credit_notes.scailo_pb.ts:2796](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/credit_notes.scailo_pb.ts#L2796)

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

[src/credit_notes.scailo_pb.ts:2780](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/credit_notes.scailo_pb.ts#L2780)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

Sales Order related filters
The associated consignee client ID of the linked sales order

**`Generated`**

from field: uint64 consignee_client_id = 50;

#### Defined in

[src/credit_notes.scailo_pb.ts:2871](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/credit_notes.scailo_pb.ts#L2871)

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

[src/credit_notes.scailo_pb.ts:2640](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/credit_notes.scailo_pb.ts#L2640)

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

[src/credit_notes.scailo_pb.ts:2624](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/credit_notes.scailo_pb.ts#L2624)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 24;

#### Defined in

[src/credit_notes.scailo_pb.ts:2849](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/credit_notes.scailo_pb.ts#L2849)

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

[src/credit_notes.scailo_pb.ts:2688](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/credit_notes.scailo_pb.ts#L2688)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

[src/credit_notes.scailo_pb.ts:2863](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/credit_notes.scailo_pb.ts#L2863)

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

[src/credit_notes.scailo_pb.ts:2828](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/credit_notes.scailo_pb.ts#L2828)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/credit_notes.scailo_pb.ts:2906](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/credit_notes.scailo_pb.ts#L2906)

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

[src/credit_notes.scailo_pb.ts:2608](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/credit_notes.scailo_pb.ts#L2608)

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

[src/credit_notes.scailo_pb.ts:2672](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/credit_notes.scailo_pb.ts#L2672)

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

[src/credit_notes.scailo_pb.ts:2656](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/credit_notes.scailo_pb.ts#L2656)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project of the linked sales order

**`Generated`**

from field: uint64 project_id = 52;

#### Defined in

[src/credit_notes.scailo_pb.ts:2885](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/credit_notes.scailo_pb.ts#L2885)

___

### refFrom

• **refFrom**: [`CREDIT_NOTE_REF_FROM`](../enums/CREDIT_NOTE_REF_FROM.md) = `CREDIT_NOTE_REF_FROM.CREDIT_NOTE_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.CREDIT_NOTE_REF_FROM ref_from = 22;

#### Defined in

[src/credit_notes.scailo_pb.ts:2835](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/credit_notes.scailo_pb.ts#L2835)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/credit_notes.scailo_pb.ts:2842](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/credit_notes.scailo_pb.ts#L2842)

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

[src/credit_notes.scailo_pb.ts:2812](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/credit_notes.scailo_pb.ts#L2812)

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

[src/credit_notes.scailo_pb.ts:2700](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/credit_notes.scailo_pb.ts#L2700)

___

### totalValueMax

• **totalValueMax**: `bigint` = `protoInt64.zero`

Stores the maximum value of the credit note (ignored if 0)

**`Generated`**

from field: uint64 total_value_max = 71;

#### Defined in

[src/credit_notes.scailo_pb.ts:2899](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/credit_notes.scailo_pb.ts#L2899)

___

### totalValueMin

• **totalValueMin**: `bigint` = `protoInt64.zero`

Stores the minimum value of the credit note (ignored if 0)

**`Generated`**

from field: uint64 total_value_min = 70;

#### Defined in

[src/credit_notes.scailo_pb.ts:2892](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/credit_notes.scailo_pb.ts#L2892)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/credit_notes.scailo_pb.ts:2915](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/credit_notes.scailo_pb.ts#L2915)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/credit_notes.scailo_pb.ts:2913](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/credit_notes.scailo_pb.ts#L2913)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CreditNotesServiceCountReq"``

#### Defined in

[src/credit_notes.scailo_pb.ts:2914](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/credit_notes.scailo_pb.ts#L2914)

## Methods

### clone

▸ **clone**(): [`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md)

Create a deep copy.

#### Returns

[`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md) \| `PlainMessage`\<[`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md) \| `PlainMessage`\<[`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md)\> |
| `b` | `undefined` \| [`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md) \| `PlainMessage`\<[`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/credit_notes.scailo_pb.ts:2956](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/credit_notes.scailo_pb.ts#L2956)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md)

#### Defined in

[src/credit_notes.scailo_pb.ts:2944](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/credit_notes.scailo_pb.ts#L2944)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md)

#### Defined in

[src/credit_notes.scailo_pb.ts:2948](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/credit_notes.scailo_pb.ts#L2948)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md)

#### Defined in

[src/credit_notes.scailo_pb.ts:2952](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/credit_notes.scailo_pb.ts#L2952)
