[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StockReturnsServiceCountReq

# Class: StockReturnsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.StockReturnsServiceCountReq

## Hierarchy

- `Message`\<[`StockReturnsServiceCountReq`](StockReturnsServiceCountReq.md)\>

  ↳ **`StockReturnsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](StockReturnsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](StockReturnsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](StockReturnsServiceCountReq.md#approvedonend)
- [approvedOnStart](StockReturnsServiceCountReq.md#approvedonstart)
- [approverRoleId](StockReturnsServiceCountReq.md#approverroleid)
- [completedOnEnd](StockReturnsServiceCountReq.md#completedonend)
- [completedOnStart](StockReturnsServiceCountReq.md#completedonstart)
- [creationTimestampEnd](StockReturnsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](StockReturnsServiceCountReq.md#creationtimestampstart)
- [entityUuid](StockReturnsServiceCountReq.md#entityuuid)
- [familyId](StockReturnsServiceCountReq.md#familyid)
- [finalRefNumber](StockReturnsServiceCountReq.md#finalrefnumber)
- [formData](StockReturnsServiceCountReq.md#formdata)
- [isActive](StockReturnsServiceCountReq.md#isactive)
- [locationId](StockReturnsServiceCountReq.md#locationid)
- [modificationTimestampEnd](StockReturnsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](StockReturnsServiceCountReq.md#modificationtimestampstart)
- [refFrom](StockReturnsServiceCountReq.md#reffrom)
- [refId](StockReturnsServiceCountReq.md#refid)
- [referenceId](StockReturnsServiceCountReq.md#referenceid)
- [status](StockReturnsServiceCountReq.md#status)
- [fields](StockReturnsServiceCountReq.md#fields)
- [runtime](StockReturnsServiceCountReq.md#runtime)
- [typeName](StockReturnsServiceCountReq.md#typename)

### Methods

- [clone](StockReturnsServiceCountReq.md#clone)
- [equals](StockReturnsServiceCountReq.md#equals)
- [fromBinary](StockReturnsServiceCountReq.md#frombinary)
- [fromJson](StockReturnsServiceCountReq.md#fromjson)
- [fromJsonString](StockReturnsServiceCountReq.md#fromjsonstring)
- [getType](StockReturnsServiceCountReq.md#gettype)
- [toBinary](StockReturnsServiceCountReq.md#tobinary)
- [toJSON](StockReturnsServiceCountReq.md#tojson)
- [toJson](StockReturnsServiceCountReq.md#tojson-1)
- [toJsonString](StockReturnsServiceCountReq.md#tojsonstring)
- [equals](StockReturnsServiceCountReq.md#equals-1)
- [fromBinary](StockReturnsServiceCountReq.md#frombinary-1)
- [fromJson](StockReturnsServiceCountReq.md#fromjson-1)
- [fromJsonString](StockReturnsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockReturnsServiceCountReq**(`data?`): [`StockReturnsServiceCountReq`](StockReturnsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockReturnsServiceCountReq`](StockReturnsServiceCountReq.md)\> |

#### Returns

[`StockReturnsServiceCountReq`](StockReturnsServiceCountReq.md)

#### Overrides

Message\&lt;StockReturnsServiceCountReq\&gt;.constructor

#### Defined in

[src/stock_returns.scailo_pb.ts:2003](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/stock_returns.scailo_pb.ts#L2003)

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

[src/stock_returns.scailo_pb.ts:1886](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/stock_returns.scailo_pb.ts#L1886)

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

[src/stock_returns.scailo_pb.ts:1870](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/stock_returns.scailo_pb.ts#L1870)

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

[src/stock_returns.scailo_pb.ts:1854](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/stock_returns.scailo_pb.ts#L1854)

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

[src/stock_returns.scailo_pb.ts:1902](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/stock_returns.scailo_pb.ts#L1902)

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

[src/stock_returns.scailo_pb.ts:1934](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/stock_returns.scailo_pb.ts#L1934)

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

[src/stock_returns.scailo_pb.ts:1918](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/stock_returns.scailo_pb.ts#L1918)

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

[src/stock_returns.scailo_pb.ts:1778](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/stock_returns.scailo_pb.ts#L1778)

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

[src/stock_returns.scailo_pb.ts:1762](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/stock_returns.scailo_pb.ts#L1762)

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

[src/stock_returns.scailo_pb.ts:1826](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/stock_returns.scailo_pb.ts#L1826)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 30;

#### Defined in

[src/stock_returns.scailo_pb.ts:1994](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/stock_returns.scailo_pb.ts#L1994)

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

[src/stock_returns.scailo_pb.ts:1966](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/stock_returns.scailo_pb.ts#L1966)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/stock_returns.scailo_pb.ts:2001](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/stock_returns.scailo_pb.ts#L2001)

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

[src/stock_returns.scailo_pb.ts:1746](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/stock_returns.scailo_pb.ts#L1746)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 25;

#### Defined in

[src/stock_returns.scailo_pb.ts:1987](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/stock_returns.scailo_pb.ts#L1987)

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

[src/stock_returns.scailo_pb.ts:1810](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/stock_returns.scailo_pb.ts#L1810)

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

[src/stock_returns.scailo_pb.ts:1794](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/stock_returns.scailo_pb.ts#L1794)

___

### refFrom

• **refFrom**: [`STOCK_RETURN_REF_FROM`](../enums/STOCK_RETURN_REF_FROM.md) = `STOCK_RETURN_REF_FROM.STOCK_RETURN_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.STOCK_RETURN_REF_FROM ref_from = 22;

#### Defined in

[src/stock_returns.scailo_pb.ts:1973](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/stock_returns.scailo_pb.ts#L1973)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/stock_returns.scailo_pb.ts:1980](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/stock_returns.scailo_pb.ts#L1980)

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

[src/stock_returns.scailo_pb.ts:1950](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/stock_returns.scailo_pb.ts#L1950)

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

[src/stock_returns.scailo_pb.ts:1838](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/stock_returns.scailo_pb.ts#L1838)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_returns.scailo_pb.ts:2010](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/stock_returns.scailo_pb.ts#L2010)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_returns.scailo_pb.ts:2008](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/stock_returns.scailo_pb.ts#L2008)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockReturnsServiceCountReq"``

#### Defined in

[src/stock_returns.scailo_pb.ts:2009](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/stock_returns.scailo_pb.ts#L2009)

## Methods

### clone

▸ **clone**(): [`StockReturnsServiceCountReq`](StockReturnsServiceCountReq.md)

Create a deep copy.

#### Returns

[`StockReturnsServiceCountReq`](StockReturnsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`StockReturnsServiceCountReq`](StockReturnsServiceCountReq.md) \| `PlainMessage`\<[`StockReturnsServiceCountReq`](StockReturnsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockReturnsServiceCountReq`](StockReturnsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockReturnsServiceCountReq`](StockReturnsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`StockReturnsServiceCountReq`](StockReturnsServiceCountReq.md) \| `PlainMessage`\<[`StockReturnsServiceCountReq`](StockReturnsServiceCountReq.md)\> |
| `b` | `undefined` \| [`StockReturnsServiceCountReq`](StockReturnsServiceCountReq.md) \| `PlainMessage`\<[`StockReturnsServiceCountReq`](StockReturnsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_returns.scailo_pb.ts:2045](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/stock_returns.scailo_pb.ts#L2045)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockReturnsServiceCountReq`](StockReturnsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockReturnsServiceCountReq`](StockReturnsServiceCountReq.md)

#### Defined in

[src/stock_returns.scailo_pb.ts:2033](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/stock_returns.scailo_pb.ts#L2033)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockReturnsServiceCountReq`](StockReturnsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockReturnsServiceCountReq`](StockReturnsServiceCountReq.md)

#### Defined in

[src/stock_returns.scailo_pb.ts:2037](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/stock_returns.scailo_pb.ts#L2037)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockReturnsServiceCountReq`](StockReturnsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockReturnsServiceCountReq`](StockReturnsServiceCountReq.md)

#### Defined in

[src/stock_returns.scailo_pb.ts:2041](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/stock_returns.scailo_pb.ts#L2041)
