[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QCGroupsServiceCountReq

# Class: QCGroupsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.QCGroupsServiceCountReq

## Hierarchy

- `Message`\<[`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md)\>

  ↳ **`QCGroupsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](QCGroupsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](QCGroupsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](QCGroupsServiceCountReq.md#approvedonend)
- [approvedOnStart](QCGroupsServiceCountReq.md#approvedonstart)
- [approverRoleId](QCGroupsServiceCountReq.md#approverroleid)
- [code](QCGroupsServiceCountReq.md#code)
- [completedOnEnd](QCGroupsServiceCountReq.md#completedonend)
- [completedOnStart](QCGroupsServiceCountReq.md#completedonstart)
- [creationTimestampEnd](QCGroupsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](QCGroupsServiceCountReq.md#creationtimestampstart)
- [entityUuid](QCGroupsServiceCountReq.md#entityuuid)
- [familyId](QCGroupsServiceCountReq.md#familyid)
- [formData](QCGroupsServiceCountReq.md#formdata)
- [isActive](QCGroupsServiceCountReq.md#isactive)
- [modificationTimestampEnd](QCGroupsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](QCGroupsServiceCountReq.md#modificationtimestampstart)
- [name](QCGroupsServiceCountReq.md#name)
- [status](QCGroupsServiceCountReq.md#status)
- [fields](QCGroupsServiceCountReq.md#fields)
- [runtime](QCGroupsServiceCountReq.md#runtime)
- [typeName](QCGroupsServiceCountReq.md#typename)

### Methods

- [clone](QCGroupsServiceCountReq.md#clone)
- [equals](QCGroupsServiceCountReq.md#equals)
- [fromBinary](QCGroupsServiceCountReq.md#frombinary)
- [fromJson](QCGroupsServiceCountReq.md#fromjson)
- [fromJsonString](QCGroupsServiceCountReq.md#fromjsonstring)
- [getType](QCGroupsServiceCountReq.md#gettype)
- [toBinary](QCGroupsServiceCountReq.md#tobinary)
- [toJSON](QCGroupsServiceCountReq.md#tojson)
- [toJson](QCGroupsServiceCountReq.md#tojson-1)
- [toJsonString](QCGroupsServiceCountReq.md#tojsonstring)
- [equals](QCGroupsServiceCountReq.md#equals-1)
- [fromBinary](QCGroupsServiceCountReq.md#frombinary-1)
- [fromJson](QCGroupsServiceCountReq.md#fromjson-1)
- [fromJsonString](QCGroupsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCGroupsServiceCountReq**(`data?`): [`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md)\> |

#### Returns

[`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md)

#### Overrides

Message\&lt;QCGroupsServiceCountReq\&gt;.constructor

#### Defined in

[src/qc_groups.scailo_pb.ts:2235](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2235)

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

[src/qc_groups.scailo_pb.ts:2157](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2157)

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

[src/qc_groups.scailo_pb.ts:2141](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2141)

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

[src/qc_groups.scailo_pb.ts:2125](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2125)

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

[src/qc_groups.scailo_pb.ts:2173](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2173)

___

### code

• **code**: `string` = `""`

The qc group code

**`Generated`**

from field: string code = 21;

#### Defined in

[src/qc_groups.scailo_pb.ts:2219](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2219)

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

[src/qc_groups.scailo_pb.ts:2205](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2205)

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

[src/qc_groups.scailo_pb.ts:2189](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2189)

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

[src/qc_groups.scailo_pb.ts:2049](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2049)

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

[src/qc_groups.scailo_pb.ts:2033](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2033)

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

[src/qc_groups.scailo_pb.ts:2097](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2097)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Retrieve qc groups that are assigned to the given family ID

**`Generated`**

from field: uint64 family_id = 30;

#### Defined in

[src/qc_groups.scailo_pb.ts:2226](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2226)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/qc_groups.scailo_pb.ts:2233](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2233)

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

[src/qc_groups.scailo_pb.ts:2017](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2017)

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

[src/qc_groups.scailo_pb.ts:2081](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2081)

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

[src/qc_groups.scailo_pb.ts:2065](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2065)

___

### name

• **name**: `string` = `""`

The name of the qc group

**`Generated`**

from field: string name = 20;

#### Defined in

[src/qc_groups.scailo_pb.ts:2212](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2212)

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

[src/qc_groups.scailo_pb.ts:2109](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2109)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_groups.scailo_pb.ts:2242](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2242)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_groups.scailo_pb.ts:2240](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2240)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCGroupsServiceCountReq"``

#### Defined in

[src/qc_groups.scailo_pb.ts:2241](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2241)

## Methods

### clone

▸ **clone**(): [`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md)

Create a deep copy.

#### Returns

[`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md) \| `PlainMessage`\<[`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md) \| `PlainMessage`\<[`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md)\> |
| `b` | `undefined` \| [`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md) \| `PlainMessage`\<[`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_groups.scailo_pb.ts:2274](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2274)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md)

#### Defined in

[src/qc_groups.scailo_pb.ts:2262](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2262)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md)

#### Defined in

[src/qc_groups.scailo_pb.ts:2266](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2266)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceCountReq`](QCGroupsServiceCountReq.md)

#### Defined in

[src/qc_groups.scailo_pb.ts:2270](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_groups.scailo_pb.ts#L2270)
