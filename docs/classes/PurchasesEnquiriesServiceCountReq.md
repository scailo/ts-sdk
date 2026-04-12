[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesEnquiriesServiceCountReq

# Class: PurchasesEnquiriesServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.PurchasesEnquiriesServiceCountReq

## Hierarchy

- `Message`\<[`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md)\>

  ↳ **`PurchasesEnquiriesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](PurchasesEnquiriesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](PurchasesEnquiriesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](PurchasesEnquiriesServiceCountReq.md#approvedonend)
- [approvedOnStart](PurchasesEnquiriesServiceCountReq.md#approvedonstart)
- [approverRoleId](PurchasesEnquiriesServiceCountReq.md#approverroleid)
- [completedOnEnd](PurchasesEnquiriesServiceCountReq.md#completedonend)
- [completedOnStart](PurchasesEnquiriesServiceCountReq.md#completedonstart)
- [creationTimestampEnd](PurchasesEnquiriesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](PurchasesEnquiriesServiceCountReq.md#creationtimestampstart)
- [entityUuid](PurchasesEnquiriesServiceCountReq.md#entityuuid)
- [finalRefNumber](PurchasesEnquiriesServiceCountReq.md#finalrefnumber)
- [formData](PurchasesEnquiriesServiceCountReq.md#formdata)
- [isActive](PurchasesEnquiriesServiceCountReq.md#isactive)
- [modificationTimestampEnd](PurchasesEnquiriesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](PurchasesEnquiriesServiceCountReq.md#modificationtimestampstart)
- [priority](PurchasesEnquiriesServiceCountReq.md#priority)
- [referenceId](PurchasesEnquiriesServiceCountReq.md#referenceid)
- [status](PurchasesEnquiriesServiceCountReq.md#status)
- [fields](PurchasesEnquiriesServiceCountReq.md#fields)
- [runtime](PurchasesEnquiriesServiceCountReq.md#runtime)
- [typeName](PurchasesEnquiriesServiceCountReq.md#typename)

### Methods

- [clone](PurchasesEnquiriesServiceCountReq.md#clone)
- [equals](PurchasesEnquiriesServiceCountReq.md#equals)
- [fromBinary](PurchasesEnquiriesServiceCountReq.md#frombinary)
- [fromJson](PurchasesEnquiriesServiceCountReq.md#fromjson)
- [fromJsonString](PurchasesEnquiriesServiceCountReq.md#fromjsonstring)
- [getType](PurchasesEnquiriesServiceCountReq.md#gettype)
- [toBinary](PurchasesEnquiriesServiceCountReq.md#tobinary)
- [toJSON](PurchasesEnquiriesServiceCountReq.md#tojson)
- [toJson](PurchasesEnquiriesServiceCountReq.md#tojson-1)
- [toJsonString](PurchasesEnquiriesServiceCountReq.md#tojsonstring)
- [equals](PurchasesEnquiriesServiceCountReq.md#equals-1)
- [fromBinary](PurchasesEnquiriesServiceCountReq.md#frombinary-1)
- [fromJson](PurchasesEnquiriesServiceCountReq.md#fromjson-1)
- [fromJsonString](PurchasesEnquiriesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesEnquiriesServiceCountReq**(`data?`): [`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md)\> |

#### Returns

[`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md)

#### Overrides

Message\&lt;PurchasesEnquiriesServiceCountReq\&gt;.constructor

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:2140](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_enquiries.scailo_pb.ts#L2140)

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

[src/purchases_enquiries.scailo_pb.ts:2044](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_enquiries.scailo_pb.ts#L2044)

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

[src/purchases_enquiries.scailo_pb.ts:2028](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_enquiries.scailo_pb.ts#L2028)

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

[src/purchases_enquiries.scailo_pb.ts:2012](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_enquiries.scailo_pb.ts#L2012)

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

[src/purchases_enquiries.scailo_pb.ts:2060](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_enquiries.scailo_pb.ts#L2060)

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

[src/purchases_enquiries.scailo_pb.ts:2092](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_enquiries.scailo_pb.ts#L2092)

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

[src/purchases_enquiries.scailo_pb.ts:2076](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_enquiries.scailo_pb.ts#L2076)

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

[src/purchases_enquiries.scailo_pb.ts:1936](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_enquiries.scailo_pb.ts#L1936)

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

[src/purchases_enquiries.scailo_pb.ts:1920](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_enquiries.scailo_pb.ts#L1920)

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

[src/purchases_enquiries.scailo_pb.ts:1984](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_enquiries.scailo_pb.ts#L1984)

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

[src/purchases_enquiries.scailo_pb.ts:2124](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_enquiries.scailo_pb.ts#L2124)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:2138](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_enquiries.scailo_pb.ts#L2138)

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

[src/purchases_enquiries.scailo_pb.ts:1904](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_enquiries.scailo_pb.ts#L1904)

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

[src/purchases_enquiries.scailo_pb.ts:1968](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_enquiries.scailo_pb.ts#L1968)

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

[src/purchases_enquiries.scailo_pb.ts:1952](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_enquiries.scailo_pb.ts#L1952)

___

### priority

• **priority**: `string` = `""`

The priority of the purchase enquiry. Possible values are "low", "medium", "high".

**`Generated`**

from field: string priority = 24;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:2131](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_enquiries.scailo_pb.ts#L2131)

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

[src/purchases_enquiries.scailo_pb.ts:2108](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_enquiries.scailo_pb.ts#L2108)

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

[src/purchases_enquiries.scailo_pb.ts:1996](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_enquiries.scailo_pb.ts#L1996)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:2147](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_enquiries.scailo_pb.ts#L2147)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:2145](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_enquiries.scailo_pb.ts#L2145)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesEnquiriesServiceCountReq"``

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:2146](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_enquiries.scailo_pb.ts#L2146)

## Methods

### clone

▸ **clone**(): [`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md)

Create a deep copy.

#### Returns

[`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md) \| `PlainMessage`\<[`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md) \| `PlainMessage`\<[`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md)\> |
| `b` | `undefined` \| [`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md) \| `PlainMessage`\<[`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:2179](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_enquiries.scailo_pb.ts#L2179)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md)

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:2167](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_enquiries.scailo_pb.ts#L2167)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md)

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:2171](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_enquiries.scailo_pb.ts#L2171)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceCountReq`](PurchasesEnquiriesServiceCountReq.md)

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:2175](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/purchases_enquiries.scailo_pb.ts#L2175)
