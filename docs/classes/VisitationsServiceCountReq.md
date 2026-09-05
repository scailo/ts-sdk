[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VisitationsServiceCountReq

# Class: VisitationsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.VisitationsServiceCountReq

## Hierarchy

- `Message`\<[`VisitationsServiceCountReq`](VisitationsServiceCountReq.md)\>

  ↳ **`VisitationsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](VisitationsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](VisitationsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](VisitationsServiceCountReq.md#approvedonend)
- [approvedOnStart](VisitationsServiceCountReq.md#approvedonstart)
- [approverRoleId](VisitationsServiceCountReq.md#approverroleid)
- [associateId](VisitationsServiceCountReq.md#associateid)
- [completedOnEnd](VisitationsServiceCountReq.md#completedonend)
- [completedOnStart](VisitationsServiceCountReq.md#completedonstart)
- [creationTimestampEnd](VisitationsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](VisitationsServiceCountReq.md#creationtimestampstart)
- [entityUuid](VisitationsServiceCountReq.md#entityuuid)
- [entryTimestampEnd](VisitationsServiceCountReq.md#entrytimestampend)
- [entryTimestampStart](VisitationsServiceCountReq.md#entrytimestampstart)
- [exitTimestampEnd](VisitationsServiceCountReq.md#exittimestampend)
- [exitTimestampStart](VisitationsServiceCountReq.md#exittimestampstart)
- [finalRefNumber](VisitationsServiceCountReq.md#finalrefnumber)
- [formData](VisitationsServiceCountReq.md#formdata)
- [isActive](VisitationsServiceCountReq.md#isactive)
- [modificationTimestampEnd](VisitationsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](VisitationsServiceCountReq.md#modificationtimestampstart)
- [referenceId](VisitationsServiceCountReq.md#referenceid)
- [status](VisitationsServiceCountReq.md#status)
- [userId](VisitationsServiceCountReq.md#userid)
- [fields](VisitationsServiceCountReq.md#fields)
- [runtime](VisitationsServiceCountReq.md#runtime)
- [typeName](VisitationsServiceCountReq.md#typename)

### Methods

- [clone](VisitationsServiceCountReq.md#clone)
- [equals](VisitationsServiceCountReq.md#equals)
- [fromBinary](VisitationsServiceCountReq.md#frombinary)
- [fromJson](VisitationsServiceCountReq.md#fromjson)
- [fromJsonString](VisitationsServiceCountReq.md#fromjsonstring)
- [getType](VisitationsServiceCountReq.md#gettype)
- [toBinary](VisitationsServiceCountReq.md#tobinary)
- [toJSON](VisitationsServiceCountReq.md#tojson)
- [toJson](VisitationsServiceCountReq.md#tojson-1)
- [toJsonString](VisitationsServiceCountReq.md#tojsonstring)
- [equals](VisitationsServiceCountReq.md#equals-1)
- [fromBinary](VisitationsServiceCountReq.md#frombinary-1)
- [fromJson](VisitationsServiceCountReq.md#fromjson-1)
- [fromJsonString](VisitationsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new VisitationsServiceCountReq**(`data?`): [`VisitationsServiceCountReq`](VisitationsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VisitationsServiceCountReq`](VisitationsServiceCountReq.md)\> |

#### Returns

[`VisitationsServiceCountReq`](VisitationsServiceCountReq.md)

#### Overrides

Message\&lt;VisitationsServiceCountReq\&gt;.constructor

#### Defined in

[src/visitations.scailo_pb.ts:1733](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1733)

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

[src/visitations.scailo_pb.ts:1599](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1599)

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

[src/visitations.scailo_pb.ts:1583](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1583)

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

[src/visitations.scailo_pb.ts:1567](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1567)

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

[src/visitations.scailo_pb.ts:1615](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1615)

___

### associateId

• **associateId**: `bigint` = `protoInt64.zero`

The ID of the associate who has requested for visitation

**`Generated`**

from field: uint64 associate_id = 23;

#### Defined in

[src/visitations.scailo_pb.ts:1693](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1693)

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

[src/visitations.scailo_pb.ts:1647](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1647)

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

[src/visitations.scailo_pb.ts:1631](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1631)

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

[src/visitations.scailo_pb.ts:1491](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1491)

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

[src/visitations.scailo_pb.ts:1475](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1475)

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

[src/visitations.scailo_pb.ts:1539](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1539)

___

### entryTimestampEnd

• **entryTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of "from timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,

**`Generated`**

from field: uint64 entry_timestamp_end = 25;

#### Defined in

[src/visitations.scailo_pb.ts:1707](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1707)

___

### entryTimestampStart

• **entryTimestampStart**: `bigint` = `protoInt64.zero`

The start range of "from timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,

**`Generated`**

from field: uint64 entry_timestamp_start = 24;

#### Defined in

[src/visitations.scailo_pb.ts:1700](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1700)

___

### exitTimestampEnd

• **exitTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of "to timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,

**`Generated`**

from field: uint64 exit_timestamp_end = 27;

#### Defined in

[src/visitations.scailo_pb.ts:1721](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1721)

___

### exitTimestampStart

• **exitTimestampStart**: `bigint` = `protoInt64.zero`

The start range of "to timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,

**`Generated`**

from field: uint64 exit_timestamp_start = 26;

#### Defined in

[src/visitations.scailo_pb.ts:1714](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1714)

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

[src/visitations.scailo_pb.ts:1679](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1679)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Count based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/visitations.scailo_pb.ts:1731](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1731)

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

[src/visitations.scailo_pb.ts:1459](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1459)

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

[src/visitations.scailo_pb.ts:1523](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1523)

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

[src/visitations.scailo_pb.ts:1507](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1507)

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

[src/visitations.scailo_pb.ts:1663](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1663)

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

[src/visitations.scailo_pb.ts:1551](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1551)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who is being visited

**`Generated`**

from field: uint64 user_id = 22;

#### Defined in

[src/visitations.scailo_pb.ts:1686](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1686)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/visitations.scailo_pb.ts:1740](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1740)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/visitations.scailo_pb.ts:1738](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1738)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VisitationsServiceCountReq"``

#### Defined in

[src/visitations.scailo_pb.ts:1739](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1739)

## Methods

### clone

▸ **clone**(): [`VisitationsServiceCountReq`](VisitationsServiceCountReq.md)

Create a deep copy.

#### Returns

[`VisitationsServiceCountReq`](VisitationsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`VisitationsServiceCountReq`](VisitationsServiceCountReq.md) \| `PlainMessage`\<[`VisitationsServiceCountReq`](VisitationsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`VisitationsServiceCountReq`](VisitationsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VisitationsServiceCountReq`](VisitationsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`VisitationsServiceCountReq`](VisitationsServiceCountReq.md) \| `PlainMessage`\<[`VisitationsServiceCountReq`](VisitationsServiceCountReq.md)\> |
| `b` | `undefined` \| [`VisitationsServiceCountReq`](VisitationsServiceCountReq.md) \| `PlainMessage`\<[`VisitationsServiceCountReq`](VisitationsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/visitations.scailo_pb.ts:1777](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1777)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VisitationsServiceCountReq`](VisitationsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VisitationsServiceCountReq`](VisitationsServiceCountReq.md)

#### Defined in

[src/visitations.scailo_pb.ts:1765](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1765)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VisitationsServiceCountReq`](VisitationsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VisitationsServiceCountReq`](VisitationsServiceCountReq.md)

#### Defined in

[src/visitations.scailo_pb.ts:1769](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1769)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VisitationsServiceCountReq`](VisitationsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VisitationsServiceCountReq`](VisitationsServiceCountReq.md)

#### Defined in

[src/visitations.scailo_pb.ts:1773](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/visitations.scailo_pb.ts#L1773)
