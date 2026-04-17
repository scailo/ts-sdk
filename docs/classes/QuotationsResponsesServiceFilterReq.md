[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuotationsResponsesServiceFilterReq

# Class: QuotationsResponsesServiceFilterReq

Describes the base response payload of a filter search

**`Generated`**

from message Scailo.QuotationsResponsesServiceFilterReq

## Hierarchy

- `Message`\<[`QuotationsResponsesServiceFilterReq`](QuotationsResponsesServiceFilterReq.md)\>

  ↳ **`QuotationsResponsesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](QuotationsResponsesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](QuotationsResponsesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](QuotationsResponsesServiceFilterReq.md#approvedonend)
- [approvedOnStart](QuotationsResponsesServiceFilterReq.md#approvedonstart)
- [approverRoleId](QuotationsResponsesServiceFilterReq.md#approverroleid)
- [completedOnEnd](QuotationsResponsesServiceFilterReq.md#completedonend)
- [completedOnStart](QuotationsResponsesServiceFilterReq.md#completedonstart)
- [count](QuotationsResponsesServiceFilterReq.md#count)
- [creationTimestampEnd](QuotationsResponsesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](QuotationsResponsesServiceFilterReq.md#creationtimestampstart)
- [currencyId](QuotationsResponsesServiceFilterReq.md#currencyid)
- [entityUuid](QuotationsResponsesServiceFilterReq.md#entityuuid)
- [finalRefNumber](QuotationsResponsesServiceFilterReq.md#finalrefnumber)
- [formData](QuotationsResponsesServiceFilterReq.md#formdata)
- [isActive](QuotationsResponsesServiceFilterReq.md#isactive)
- [modificationTimestampEnd](QuotationsResponsesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](QuotationsResponsesServiceFilterReq.md#modificationtimestampstart)
- [offset](QuotationsResponsesServiceFilterReq.md#offset)
- [quotationRequestId](QuotationsResponsesServiceFilterReq.md#quotationrequestid)
- [referenceId](QuotationsResponsesServiceFilterReq.md#referenceid)
- [sortKey](QuotationsResponsesServiceFilterReq.md#sortkey)
- [sortOrder](QuotationsResponsesServiceFilterReq.md#sortorder)
- [status](QuotationsResponsesServiceFilterReq.md#status)
- [vendorId](QuotationsResponsesServiceFilterReq.md#vendorid)
- [fields](QuotationsResponsesServiceFilterReq.md#fields)
- [runtime](QuotationsResponsesServiceFilterReq.md#runtime)
- [typeName](QuotationsResponsesServiceFilterReq.md#typename)

### Methods

- [clone](QuotationsResponsesServiceFilterReq.md#clone)
- [equals](QuotationsResponsesServiceFilterReq.md#equals)
- [fromBinary](QuotationsResponsesServiceFilterReq.md#frombinary)
- [fromJson](QuotationsResponsesServiceFilterReq.md#fromjson)
- [fromJsonString](QuotationsResponsesServiceFilterReq.md#fromjsonstring)
- [getType](QuotationsResponsesServiceFilterReq.md#gettype)
- [toBinary](QuotationsResponsesServiceFilterReq.md#tobinary)
- [toJSON](QuotationsResponsesServiceFilterReq.md#tojson)
- [toJson](QuotationsResponsesServiceFilterReq.md#tojson-1)
- [toJsonString](QuotationsResponsesServiceFilterReq.md#tojsonstring)
- [equals](QuotationsResponsesServiceFilterReq.md#equals-1)
- [fromBinary](QuotationsResponsesServiceFilterReq.md#frombinary-1)
- [fromJson](QuotationsResponsesServiceFilterReq.md#fromjson-1)
- [fromJsonString](QuotationsResponsesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsResponsesServiceFilterReq**(`data?`): [`QuotationsResponsesServiceFilterReq`](QuotationsResponsesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuotationsResponsesServiceFilterReq`](QuotationsResponsesServiceFilterReq.md)\> |

#### Returns

[`QuotationsResponsesServiceFilterReq`](QuotationsResponsesServiceFilterReq.md)

#### Overrides

Message\&lt;QuotationsResponsesServiceFilterReq\&gt;.constructor

#### Defined in

[src/quotations_responses.scailo_pb.ts:2130](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/quotations_responses.scailo_pb.ts#L2130)

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

[src/quotations_responses.scailo_pb.ts:2020](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/quotations_responses.scailo_pb.ts#L2020)

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

[src/quotations_responses.scailo_pb.ts:2004](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/quotations_responses.scailo_pb.ts#L2004)

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

[src/quotations_responses.scailo_pb.ts:1988](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/quotations_responses.scailo_pb.ts#L1988)

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

[src/quotations_responses.scailo_pb.ts:2036](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/quotations_responses.scailo_pb.ts#L2036)

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

[src/quotations_responses.scailo_pb.ts:2068](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/quotations_responses.scailo_pb.ts#L2068)

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

[src/quotations_responses.scailo_pb.ts:2052](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/quotations_responses.scailo_pb.ts#L2052)

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

[src/quotations_responses.scailo_pb.ts:1842](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/quotations_responses.scailo_pb.ts#L1842)

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

[src/quotations_responses.scailo_pb.ts:1912](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/quotations_responses.scailo_pb.ts#L1912)

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

[src/quotations_responses.scailo_pb.ts:1896](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/quotations_responses.scailo_pb.ts#L1896)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated currency

**`Generated`**

from field: uint64 currency_id = 25;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2114](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/quotations_responses.scailo_pb.ts#L2114)

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

[src/quotations_responses.scailo_pb.ts:1960](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/quotations_responses.scailo_pb.ts#L1960)

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

[src/quotations_responses.scailo_pb.ts:2100](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/quotations_responses.scailo_pb.ts#L2100)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2128](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/quotations_responses.scailo_pb.ts#L2128)

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

[src/quotations_responses.scailo_pb.ts:1826](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/quotations_responses.scailo_pb.ts#L1826)

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

[src/quotations_responses.scailo_pb.ts:1944](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/quotations_responses.scailo_pb.ts#L1944)

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

[src/quotations_responses.scailo_pb.ts:1928](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/quotations_responses.scailo_pb.ts#L1928)

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

[src/quotations_responses.scailo_pb.ts:1858](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/quotations_responses.scailo_pb.ts#L1858)

___

### quotationRequestId

• **quotationRequestId**: `bigint` = `protoInt64.zero`

The associated quotation request

**`Generated`**

from field: uint64 quotation_request_id = 22;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2107](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/quotations_responses.scailo_pb.ts#L2107)

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

[src/quotations_responses.scailo_pb.ts:2084](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/quotations_responses.scailo_pb.ts#L2084)

___

### sortKey

• **sortKey**: [`QUOTATION_RESPONSE_SORT_KEY`](../enums/QUOTATION_RESPONSE_SORT_KEY.md) = `QUOTATION_RESPONSE_SORT_KEY.QUOTATION_RESPONSE_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.QUOTATION_RESPONSE_SORT_KEY sort_key = 5;

#### Defined in

[src/quotations_responses.scailo_pb.ts:1880](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/quotations_responses.scailo_pb.ts#L1880)

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

[src/quotations_responses.scailo_pb.ts:1870](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/quotations_responses.scailo_pb.ts#L1870)

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

[src/quotations_responses.scailo_pb.ts:1972](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/quotations_responses.scailo_pb.ts#L1972)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The associated vendor ID

**`Generated`**

from field: uint64 vendor_id = 40;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2121](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/quotations_responses.scailo_pb.ts#L2121)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_responses.scailo_pb.ts:2137](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/quotations_responses.scailo_pb.ts#L2137)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_responses.scailo_pb.ts:2135](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/quotations_responses.scailo_pb.ts#L2135)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuotationsResponsesServiceFilterReq"``

#### Defined in

[src/quotations_responses.scailo_pb.ts:2136](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/quotations_responses.scailo_pb.ts#L2136)

## Methods

### clone

▸ **clone**(): [`QuotationsResponsesServiceFilterReq`](QuotationsResponsesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`QuotationsResponsesServiceFilterReq`](QuotationsResponsesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsResponsesServiceFilterReq`](QuotationsResponsesServiceFilterReq.md) \| `PlainMessage`\<[`QuotationsResponsesServiceFilterReq`](QuotationsResponsesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuotationsResponsesServiceFilterReq`](QuotationsResponsesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuotationsResponsesServiceFilterReq`](QuotationsResponsesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`QuotationsResponsesServiceFilterReq`](QuotationsResponsesServiceFilterReq.md) \| `PlainMessage`\<[`QuotationsResponsesServiceFilterReq`](QuotationsResponsesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`QuotationsResponsesServiceFilterReq`](QuotationsResponsesServiceFilterReq.md) \| `PlainMessage`\<[`QuotationsResponsesServiceFilterReq`](QuotationsResponsesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_responses.scailo_pb.ts:2175](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/quotations_responses.scailo_pb.ts#L2175)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsResponsesServiceFilterReq`](QuotationsResponsesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceFilterReq`](QuotationsResponsesServiceFilterReq.md)

#### Defined in

[src/quotations_responses.scailo_pb.ts:2163](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/quotations_responses.scailo_pb.ts#L2163)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsResponsesServiceFilterReq`](QuotationsResponsesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceFilterReq`](QuotationsResponsesServiceFilterReq.md)

#### Defined in

[src/quotations_responses.scailo_pb.ts:2167](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/quotations_responses.scailo_pb.ts#L2167)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsResponsesServiceFilterReq`](QuotationsResponsesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceFilterReq`](QuotationsResponsesServiceFilterReq.md)

#### Defined in

[src/quotations_responses.scailo_pb.ts:2171](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/quotations_responses.scailo_pb.ts#L2171)
