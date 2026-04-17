[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / DebitNotesServiceCountReq

# Class: DebitNotesServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.DebitNotesServiceCountReq

## Hierarchy

- `Message`\<[`DebitNotesServiceCountReq`](DebitNotesServiceCountReq.md)\>

  ↳ **`DebitNotesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](DebitNotesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](DebitNotesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](DebitNotesServiceCountReq.md#approvedonend)
- [approvedOnStart](DebitNotesServiceCountReq.md#approvedonstart)
- [approverRoleId](DebitNotesServiceCountReq.md#approverroleid)
- [completedOnEnd](DebitNotesServiceCountReq.md#completedonend)
- [completedOnStart](DebitNotesServiceCountReq.md#completedonstart)
- [creationTimestampEnd](DebitNotesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](DebitNotesServiceCountReq.md#creationtimestampstart)
- [currencyId](DebitNotesServiceCountReq.md#currencyid)
- [entityUuid](DebitNotesServiceCountReq.md#entityuuid)
- [familyId](DebitNotesServiceCountReq.md#familyid)
- [finalRefNumber](DebitNotesServiceCountReq.md#finalrefnumber)
- [formData](DebitNotesServiceCountReq.md#formdata)
- [isActive](DebitNotesServiceCountReq.md#isactive)
- [modificationTimestampEnd](DebitNotesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](DebitNotesServiceCountReq.md#modificationtimestampstart)
- [projectId](DebitNotesServiceCountReq.md#projectid)
- [refFrom](DebitNotesServiceCountReq.md#reffrom)
- [refId](DebitNotesServiceCountReq.md#refid)
- [referenceId](DebitNotesServiceCountReq.md#referenceid)
- [status](DebitNotesServiceCountReq.md#status)
- [totalValueMax](DebitNotesServiceCountReq.md#totalvaluemax)
- [totalValueMin](DebitNotesServiceCountReq.md#totalvaluemin)
- [vendorId](DebitNotesServiceCountReq.md#vendorid)
- [fields](DebitNotesServiceCountReq.md#fields)
- [runtime](DebitNotesServiceCountReq.md#runtime)
- [typeName](DebitNotesServiceCountReq.md#typename)

### Methods

- [clone](DebitNotesServiceCountReq.md#clone)
- [equals](DebitNotesServiceCountReq.md#equals)
- [fromBinary](DebitNotesServiceCountReq.md#frombinary)
- [fromJson](DebitNotesServiceCountReq.md#fromjson)
- [fromJsonString](DebitNotesServiceCountReq.md#fromjsonstring)
- [getType](DebitNotesServiceCountReq.md#gettype)
- [toBinary](DebitNotesServiceCountReq.md#tobinary)
- [toJSON](DebitNotesServiceCountReq.md#tojson)
- [toJson](DebitNotesServiceCountReq.md#tojson-1)
- [toJsonString](DebitNotesServiceCountReq.md#tojsonstring)
- [equals](DebitNotesServiceCountReq.md#equals-1)
- [fromBinary](DebitNotesServiceCountReq.md#frombinary-1)
- [fromJson](DebitNotesServiceCountReq.md#fromjson-1)
- [fromJsonString](DebitNotesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new DebitNotesServiceCountReq**(`data?`): [`DebitNotesServiceCountReq`](DebitNotesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DebitNotesServiceCountReq`](DebitNotesServiceCountReq.md)\> |

#### Returns

[`DebitNotesServiceCountReq`](DebitNotesServiceCountReq.md)

#### Overrides

Message\&lt;DebitNotesServiceCountReq\&gt;.constructor

#### Defined in

[src/debit_notes.scailo_pb.ts:2804](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L2804)

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

[src/debit_notes.scailo_pb.ts:2659](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L2659)

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

[src/debit_notes.scailo_pb.ts:2643](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L2643)

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

[src/debit_notes.scailo_pb.ts:2627](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L2627)

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

[src/debit_notes.scailo_pb.ts:2675](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L2675)

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

[src/debit_notes.scailo_pb.ts:2707](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L2707)

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

[src/debit_notes.scailo_pb.ts:2691](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L2691)

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

[src/debit_notes.scailo_pb.ts:2551](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L2551)

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

[src/debit_notes.scailo_pb.ts:2535](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L2535)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 30;

#### Defined in

[src/debit_notes.scailo_pb.ts:2760](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L2760)

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

[src/debit_notes.scailo_pb.ts:2599](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L2599)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

[src/debit_notes.scailo_pb.ts:2781](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L2781)

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

[src/debit_notes.scailo_pb.ts:2739](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L2739)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/debit_notes.scailo_pb.ts:2802](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L2802)

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

[src/debit_notes.scailo_pb.ts:2519](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L2519)

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

[src/debit_notes.scailo_pb.ts:2583](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L2583)

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

[src/debit_notes.scailo_pb.ts:2567](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L2567)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 32;

#### Defined in

[src/debit_notes.scailo_pb.ts:2774](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L2774)

___

### refFrom

• **refFrom**: [`DEBIT_NOTE_REF_FROM`](../enums/DEBIT_NOTE_REF_FROM.md) = `DEBIT_NOTE_REF_FROM.DEBIT_NOTE_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.DEBIT_NOTE_REF_FROM ref_from = 22;

#### Defined in

[src/debit_notes.scailo_pb.ts:2746](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L2746)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/debit_notes.scailo_pb.ts:2753](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L2753)

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

[src/debit_notes.scailo_pb.ts:2723](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L2723)

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

[src/debit_notes.scailo_pb.ts:2611](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L2611)

___

### totalValueMax

• **totalValueMax**: `bigint` = `protoInt64.zero`

Stores the maximum value of the debit note (ignored if 0)

**`Generated`**

from field: uint64 total_value_max = 71;

#### Defined in

[src/debit_notes.scailo_pb.ts:2795](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L2795)

___

### totalValueMin

• **totalValueMin**: `bigint` = `protoInt64.zero`

Stores the minimum value of the debit note (ignored if 0)

**`Generated`**

from field: uint64 total_value_min = 70;

#### Defined in

[src/debit_notes.scailo_pb.ts:2788](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L2788)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor

**`Generated`**

from field: uint64 vendor_id = 31;

#### Defined in

[src/debit_notes.scailo_pb.ts:2767](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L2767)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/debit_notes.scailo_pb.ts:2811](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L2811)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/debit_notes.scailo_pb.ts:2809](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L2809)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DebitNotesServiceCountReq"``

#### Defined in

[src/debit_notes.scailo_pb.ts:2810](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L2810)

## Methods

### clone

▸ **clone**(): [`DebitNotesServiceCountReq`](DebitNotesServiceCountReq.md)

Create a deep copy.

#### Returns

[`DebitNotesServiceCountReq`](DebitNotesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`DebitNotesServiceCountReq`](DebitNotesServiceCountReq.md) \| `PlainMessage`\<[`DebitNotesServiceCountReq`](DebitNotesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`DebitNotesServiceCountReq`](DebitNotesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DebitNotesServiceCountReq`](DebitNotesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`DebitNotesServiceCountReq`](DebitNotesServiceCountReq.md) \| `PlainMessage`\<[`DebitNotesServiceCountReq`](DebitNotesServiceCountReq.md)\> |
| `b` | `undefined` \| [`DebitNotesServiceCountReq`](DebitNotesServiceCountReq.md) \| `PlainMessage`\<[`DebitNotesServiceCountReq`](DebitNotesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/debit_notes.scailo_pb.ts:2850](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L2850)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DebitNotesServiceCountReq`](DebitNotesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DebitNotesServiceCountReq`](DebitNotesServiceCountReq.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:2838](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L2838)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DebitNotesServiceCountReq`](DebitNotesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNotesServiceCountReq`](DebitNotesServiceCountReq.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:2842](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L2842)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DebitNotesServiceCountReq`](DebitNotesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNotesServiceCountReq`](DebitNotesServiceCountReq.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:2846](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/debit_notes.scailo_pb.ts#L2846)
