[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StockIssuancesServiceCountReq

# Class: StockIssuancesServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.StockIssuancesServiceCountReq

## Hierarchy

- `Message`\<[`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md)\>

  ↳ **`StockIssuancesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](StockIssuancesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](StockIssuancesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](StockIssuancesServiceCountReq.md#approvedonend)
- [approvedOnStart](StockIssuancesServiceCountReq.md#approvedonstart)
- [approverRoleId](StockIssuancesServiceCountReq.md#approverroleid)
- [completedOnEnd](StockIssuancesServiceCountReq.md#completedonend)
- [completedOnStart](StockIssuancesServiceCountReq.md#completedonstart)
- [creationTimestampEnd](StockIssuancesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](StockIssuancesServiceCountReq.md#creationtimestampstart)
- [entityUuid](StockIssuancesServiceCountReq.md#entityuuid)
- [familyId](StockIssuancesServiceCountReq.md#familyid)
- [finalRefNumber](StockIssuancesServiceCountReq.md#finalrefnumber)
- [formData](StockIssuancesServiceCountReq.md#formdata)
- [isActive](StockIssuancesServiceCountReq.md#isactive)
- [locationId](StockIssuancesServiceCountReq.md#locationid)
- [modificationTimestampEnd](StockIssuancesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](StockIssuancesServiceCountReq.md#modificationtimestampstart)
- [refFrom](StockIssuancesServiceCountReq.md#reffrom)
- [refId](StockIssuancesServiceCountReq.md#refid)
- [referenceId](StockIssuancesServiceCountReq.md#referenceid)
- [status](StockIssuancesServiceCountReq.md#status)
- [fields](StockIssuancesServiceCountReq.md#fields)
- [runtime](StockIssuancesServiceCountReq.md#runtime)
- [typeName](StockIssuancesServiceCountReq.md#typename)

### Methods

- [clone](StockIssuancesServiceCountReq.md#clone)
- [equals](StockIssuancesServiceCountReq.md#equals)
- [fromBinary](StockIssuancesServiceCountReq.md#frombinary)
- [fromJson](StockIssuancesServiceCountReq.md#fromjson)
- [fromJsonString](StockIssuancesServiceCountReq.md#fromjsonstring)
- [getType](StockIssuancesServiceCountReq.md#gettype)
- [toBinary](StockIssuancesServiceCountReq.md#tobinary)
- [toJSON](StockIssuancesServiceCountReq.md#tojson)
- [toJson](StockIssuancesServiceCountReq.md#tojson-1)
- [toJsonString](StockIssuancesServiceCountReq.md#tojsonstring)
- [equals](StockIssuancesServiceCountReq.md#equals-1)
- [fromBinary](StockIssuancesServiceCountReq.md#frombinary-1)
- [fromJson](StockIssuancesServiceCountReq.md#fromjson-1)
- [fromJsonString](StockIssuancesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockIssuancesServiceCountReq**(`data?`): [`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md)\> |

#### Returns

[`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md)

#### Overrides

Message\&lt;StockIssuancesServiceCountReq\&gt;.constructor

#### Defined in

[src/stock_issuances.scailo_pb.ts:2028](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stock_issuances.scailo_pb.ts#L2028)

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

[src/stock_issuances.scailo_pb.ts:1911](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stock_issuances.scailo_pb.ts#L1911)

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

[src/stock_issuances.scailo_pb.ts:1895](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stock_issuances.scailo_pb.ts#L1895)

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

[src/stock_issuances.scailo_pb.ts:1879](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stock_issuances.scailo_pb.ts#L1879)

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

[src/stock_issuances.scailo_pb.ts:1927](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stock_issuances.scailo_pb.ts#L1927)

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

[src/stock_issuances.scailo_pb.ts:1959](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stock_issuances.scailo_pb.ts#L1959)

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

[src/stock_issuances.scailo_pb.ts:1943](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stock_issuances.scailo_pb.ts#L1943)

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

[src/stock_issuances.scailo_pb.ts:1803](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stock_issuances.scailo_pb.ts#L1803)

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

[src/stock_issuances.scailo_pb.ts:1787](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stock_issuances.scailo_pb.ts#L1787)

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

[src/stock_issuances.scailo_pb.ts:1851](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stock_issuances.scailo_pb.ts#L1851)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 30;

#### Defined in

[src/stock_issuances.scailo_pb.ts:2019](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stock_issuances.scailo_pb.ts#L2019)

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

[src/stock_issuances.scailo_pb.ts:1991](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stock_issuances.scailo_pb.ts#L1991)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/stock_issuances.scailo_pb.ts:2026](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stock_issuances.scailo_pb.ts#L2026)

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

[src/stock_issuances.scailo_pb.ts:1771](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stock_issuances.scailo_pb.ts#L1771)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 25;

#### Defined in

[src/stock_issuances.scailo_pb.ts:2012](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stock_issuances.scailo_pb.ts#L2012)

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

[src/stock_issuances.scailo_pb.ts:1835](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stock_issuances.scailo_pb.ts#L1835)

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

[src/stock_issuances.scailo_pb.ts:1819](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stock_issuances.scailo_pb.ts#L1819)

___

### refFrom

• **refFrom**: [`STOCK_ISSUANCE_REF_FROM`](../enums/STOCK_ISSUANCE_REF_FROM.md) = `STOCK_ISSUANCE_REF_FROM.STOCK_ISSUANCE_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.STOCK_ISSUANCE_REF_FROM ref_from = 22;

#### Defined in

[src/stock_issuances.scailo_pb.ts:1998](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stock_issuances.scailo_pb.ts#L1998)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/stock_issuances.scailo_pb.ts:2005](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stock_issuances.scailo_pb.ts#L2005)

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

[src/stock_issuances.scailo_pb.ts:1975](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stock_issuances.scailo_pb.ts#L1975)

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

[src/stock_issuances.scailo_pb.ts:1863](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stock_issuances.scailo_pb.ts#L1863)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_issuances.scailo_pb.ts:2035](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stock_issuances.scailo_pb.ts#L2035)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_issuances.scailo_pb.ts:2033](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stock_issuances.scailo_pb.ts#L2033)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockIssuancesServiceCountReq"``

#### Defined in

[src/stock_issuances.scailo_pb.ts:2034](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stock_issuances.scailo_pb.ts#L2034)

## Methods

### clone

▸ **clone**(): [`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md)

Create a deep copy.

#### Returns

[`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md) \| `PlainMessage`\<[`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md) \| `PlainMessage`\<[`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md)\> |
| `b` | `undefined` \| [`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md) \| `PlainMessage`\<[`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_issuances.scailo_pb.ts:2070](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stock_issuances.scailo_pb.ts#L2070)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md)

#### Defined in

[src/stock_issuances.scailo_pb.ts:2058](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stock_issuances.scailo_pb.ts#L2058)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md)

#### Defined in

[src/stock_issuances.scailo_pb.ts:2062](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stock_issuances.scailo_pb.ts#L2062)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceCountReq`](StockIssuancesServiceCountReq.md)

#### Defined in

[src/stock_issuances.scailo_pb.ts:2066](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stock_issuances.scailo_pb.ts#L2066)
