[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuotationsResponsesServiceCountReq

# Class: QuotationsResponsesServiceCountReq

Describes the base response payload of a count search

**`Generated`**

from message Scailo.QuotationsResponsesServiceCountReq

## Hierarchy

- `Message`\<[`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md)\>

  ↳ **`QuotationsResponsesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](QuotationsResponsesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](QuotationsResponsesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](QuotationsResponsesServiceCountReq.md#approvedonend)
- [approvedOnStart](QuotationsResponsesServiceCountReq.md#approvedonstart)
- [approverRoleId](QuotationsResponsesServiceCountReq.md#approverroleid)
- [completedOnEnd](QuotationsResponsesServiceCountReq.md#completedonend)
- [completedOnStart](QuotationsResponsesServiceCountReq.md#completedonstart)
- [creationTimestampEnd](QuotationsResponsesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](QuotationsResponsesServiceCountReq.md#creationtimestampstart)
- [currencyId](QuotationsResponsesServiceCountReq.md#currencyid)
- [entityUuid](QuotationsResponsesServiceCountReq.md#entityuuid)
- [finalRefNumber](QuotationsResponsesServiceCountReq.md#finalrefnumber)
- [formData](QuotationsResponsesServiceCountReq.md#formdata)
- [isActive](QuotationsResponsesServiceCountReq.md#isactive)
- [modificationTimestampEnd](QuotationsResponsesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](QuotationsResponsesServiceCountReq.md#modificationtimestampstart)
- [quotationRequestId](QuotationsResponsesServiceCountReq.md#quotationrequestid)
- [referenceId](QuotationsResponsesServiceCountReq.md#referenceid)
- [status](QuotationsResponsesServiceCountReq.md#status)
- [vendorId](QuotationsResponsesServiceCountReq.md#vendorid)
- [fields](QuotationsResponsesServiceCountReq.md#fields)
- [runtime](QuotationsResponsesServiceCountReq.md#runtime)
- [typeName](QuotationsResponsesServiceCountReq.md#typename)

### Methods

- [clone](QuotationsResponsesServiceCountReq.md#clone)
- [equals](QuotationsResponsesServiceCountReq.md#equals)
- [fromBinary](QuotationsResponsesServiceCountReq.md#frombinary)
- [fromJson](QuotationsResponsesServiceCountReq.md#fromjson)
- [fromJsonString](QuotationsResponsesServiceCountReq.md#fromjsonstring)
- [getType](QuotationsResponsesServiceCountReq.md#gettype)
- [toBinary](QuotationsResponsesServiceCountReq.md#tobinary)
- [toJSON](QuotationsResponsesServiceCountReq.md#tojson)
- [toJson](QuotationsResponsesServiceCountReq.md#tojson-1)
- [toJsonString](QuotationsResponsesServiceCountReq.md#tojsonstring)
- [equals](QuotationsResponsesServiceCountReq.md#equals-1)
- [fromBinary](QuotationsResponsesServiceCountReq.md#frombinary-1)
- [fromJson](QuotationsResponsesServiceCountReq.md#fromjson-1)
- [fromJsonString](QuotationsResponsesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsResponsesServiceCountReq**(`data?`): [`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md)\> |

#### Returns

[`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md)

#### Overrides

Message\&lt;QuotationsResponsesServiceCountReq\&gt;.constructor

#### Defined in

[src/quotations_responses.scailo_pb.ts:2531](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2531)

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

[src/quotations_responses.scailo_pb.ts:2418](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2418)

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

[src/quotations_responses.scailo_pb.ts:2402](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2402)

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

[src/quotations_responses.scailo_pb.ts:2386](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2386)

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

[src/quotations_responses.scailo_pb.ts:2434](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2434)

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

[src/quotations_responses.scailo_pb.ts:2466](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2466)

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

[src/quotations_responses.scailo_pb.ts:2450](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2450)

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

[src/quotations_responses.scailo_pb.ts:2310](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2310)

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

[src/quotations_responses.scailo_pb.ts:2294](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2294)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated currency

**`Generated`**

from field: uint64 currency_id = 25;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2512](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2512)

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

[src/quotations_responses.scailo_pb.ts:2358](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2358)

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

[src/quotations_responses.scailo_pb.ts:2498](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2498)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Count based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2529](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2529)

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

[src/quotations_responses.scailo_pb.ts:2278](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2278)

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

[src/quotations_responses.scailo_pb.ts:2342](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2342)

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

[src/quotations_responses.scailo_pb.ts:2326](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2326)

___

### quotationRequestId

• **quotationRequestId**: `bigint` = `protoInt64.zero`

The associated quotation request

**`Generated`**

from field: uint64 quotation_request_id = 22;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2505](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2505)

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

[src/quotations_responses.scailo_pb.ts:2482](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2482)

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

[src/quotations_responses.scailo_pb.ts:2370](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2370)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The associated vendor ID

**`Generated`**

from field: uint64 vendor_id = 40;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2519](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2519)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_responses.scailo_pb.ts:2538](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2538)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_responses.scailo_pb.ts:2536](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2536)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuotationsResponsesServiceCountReq"``

#### Defined in

[src/quotations_responses.scailo_pb.ts:2537](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2537)

## Methods

### clone

▸ **clone**(): [`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md)

Create a deep copy.

#### Returns

[`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md) \| `PlainMessage`\<[`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md) \| `PlainMessage`\<[`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md)\> |
| `b` | `undefined` \| [`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md) \| `PlainMessage`\<[`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_responses.scailo_pb.ts:2572](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2572)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md)

#### Defined in

[src/quotations_responses.scailo_pb.ts:2560](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2560)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md)

#### Defined in

[src/quotations_responses.scailo_pb.ts:2564](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2564)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md)

#### Defined in

[src/quotations_responses.scailo_pb.ts:2568](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2568)
