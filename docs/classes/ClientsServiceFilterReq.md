[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientsServiceFilterReq

# Class: ClientsServiceFilterReq

Advanced filter request for searching and paginating clients using multiple logical criteria.
This message encapsulates pagination controls, sorting keys, lifecycle status filters,
timestamp ranges, and entity references.

**Note:** This is the primary message layout used by the frontend and external API clients
to build robust data-table queries, reporting views, and targeted record lookups.

**`Generated`**

from message Scailo.ClientsServiceFilterReq

## Hierarchy

- `Message`\<[`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)\>

  ↳ **`ClientsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](ClientsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](ClientsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](ClientsServiceFilterReq.md#approvedonend)
- [approvedOnStart](ClientsServiceFilterReq.md#approvedonstart)
- [approverRoleId](ClientsServiceFilterReq.md#approverroleid)
- [code](ClientsServiceFilterReq.md#code)
- [count](ClientsServiceFilterReq.md#count)
- [creationTimestampEnd](ClientsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](ClientsServiceFilterReq.md#creationtimestampstart)
- [email](ClientsServiceFilterReq.md#email)
- [entityUuid](ClientsServiceFilterReq.md#entityuuid)
- [formData](ClientsServiceFilterReq.md#formdata)
- [includeFormData](ClientsServiceFilterReq.md#includeformdata)
- [isActive](ClientsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](ClientsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](ClientsServiceFilterReq.md#modificationtimestampstart)
- [name](ClientsServiceFilterReq.md#name)
- [offset](ClientsServiceFilterReq.md#offset)
- [phone](ClientsServiceFilterReq.md#phone)
- [sortKey](ClientsServiceFilterReq.md#sortkey)
- [sortOrder](ClientsServiceFilterReq.md#sortorder)
- [status](ClientsServiceFilterReq.md#status)
- [fields](ClientsServiceFilterReq.md#fields)
- [runtime](ClientsServiceFilterReq.md#runtime)
- [typeName](ClientsServiceFilterReq.md#typename)

### Methods

- [clone](ClientsServiceFilterReq.md#clone)
- [equals](ClientsServiceFilterReq.md#equals)
- [fromBinary](ClientsServiceFilterReq.md#frombinary)
- [fromJson](ClientsServiceFilterReq.md#fromjson)
- [fromJsonString](ClientsServiceFilterReq.md#fromjsonstring)
- [getType](ClientsServiceFilterReq.md#gettype)
- [toBinary](ClientsServiceFilterReq.md#tobinary)
- [toJSON](ClientsServiceFilterReq.md#tojson)
- [toJson](ClientsServiceFilterReq.md#tojson-1)
- [toJsonString](ClientsServiceFilterReq.md#tojsonstring)
- [equals](ClientsServiceFilterReq.md#equals-1)
- [fromBinary](ClientsServiceFilterReq.md#frombinary-1)
- [fromJson](ClientsServiceFilterReq.md#fromjson-1)
- [fromJsonString](ClientsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientsServiceFilterReq**(`data?`): [`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)\> |

#### Returns

[`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)

#### Overrides

Message\&lt;ClientsServiceFilterReq\&gt;.constructor

#### Defined in

[src/clients.scailo_pb.ts:1199](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L1199)

## Properties

### approvedByUserId

• `Optional` **approvedByUserId**: `bigint`

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

from field: optional uint64 approved_by_user_id = 13;

#### Defined in

[src/clients.scailo_pb.ts:1094](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L1094)

___

### approvedOnEnd

• `Optional` **approvedOnEnd**: `bigint`

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

from field: optional uint64 approved_on_end = 12;

#### Defined in

[src/clients.scailo_pb.ts:1078](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L1078)

___

### approvedOnStart

• `Optional` **approvedOnStart**: `bigint`

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

from field: optional uint64 approved_on_start = 11;

#### Defined in

[src/clients.scailo_pb.ts:1062](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L1062)

___

### approverRoleId

• `Optional` **approverRoleId**: `bigint`

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

from field: optional uint64 approver_role_id = 14;

#### Defined in

[src/clients.scailo_pb.ts:1110](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L1110)

___

### code

• `Optional` **code**: `string`

**`Optional`**

**`Description`**

The unique code or alphanumeric token by which the client is classified or categorized internally.

**`Example`**

```ts
"CLI-ACME-001"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string code = 21;

#### Defined in

[src/clients.scailo_pb.ts:1142](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L1142)

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

[src/clients.scailo_pb.ts:916](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L916)

___

### creationTimestampEnd

• `Optional` **creationTimestampEnd**: `bigint`

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

from field: optional uint64 creation_timestamp_end = 102;

#### Defined in

[src/clients.scailo_pb.ts:986](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L986)

___

### creationTimestampStart

• `Optional` **creationTimestampStart**: `bigint`

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

from field: optional uint64 creation_timestamp_start = 101;

#### Defined in

[src/clients.scailo_pb.ts:970](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L970)

___

### email

• `Optional` **email**: `string`

**`Optional`**

**`Description`**

The primary communication email address of the client.

**`Example`**

```ts
"billing@acme.com"
```

**`Regex`**

^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$

**`Format`**

Must be a valid and structurally sound email address format.

**`Generated`**

from field: optional string email = 22;

#### Defined in

[src/clients.scailo_pb.ts:1158](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L1158)

___

### entityUuid

• `Optional` **entityUuid**: `string`

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

from field: optional string entity_uuid = 8;

#### Defined in

[src/clients.scailo_pb.ts:1034](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L1034)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/clients.scailo_pb.ts:1184](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L1184)

___

### includeFormData

• `Optional` **includeFormData**: `boolean`

**`Optional`**

**`Description`**

If `true`, the response will include the associated custom form field values for each record.
Set to `false` to improve performance when form data is not needed.

**`Example`**

```ts
true
```

**`Generated`**

from field: optional bool include_form_data = 501;

#### Defined in

[src/clients.scailo_pb.ts:1197](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L1197)

___

### isActive

• `Optional` **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md)

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: optional Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/clients.scailo_pb.ts:900](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L900)

___

### modificationTimestampEnd

• `Optional` **modificationTimestampEnd**: `bigint`

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

from field: optional uint64 modification_timestamp_end = 104;

#### Defined in

[src/clients.scailo_pb.ts:1018](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L1018)

___

### modificationTimestampStart

• `Optional` **modificationTimestampStart**: `bigint`

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

from field: optional uint64 modification_timestamp_start = 103;

#### Defined in

[src/clients.scailo_pb.ts:1002](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L1002)

___

### name

• `Optional` **name**: `string`

**`Optional`**

**`Description`**

The official or legal name of the client organization or individual.

**`Example`**

```ts
"Acme Corporation"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string name = 20;

#### Defined in

[src/clients.scailo_pb.ts:1126](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L1126)

___

### offset

• `Optional` **offset**: `bigint`

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

from field: optional uint64 offset = 3;

#### Defined in

[src/clients.scailo_pb.ts:932](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L932)

___

### phone

• `Optional` **phone**: `string`

**`Optional`**

**`Description`**

The primary contact phone number of the client, typically including country and area codes.

**`Example`**

```ts
"+1-555-222-0199"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string string representing a valid phone number format.

**`Generated`**

from field: optional string phone = 23;

#### Defined in

[src/clients.scailo_pb.ts:1174](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L1174)

___

### sortKey

• `Optional` **sortKey**: [`CLIENT_SORT_KEY`](../enums/CLIENT_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.CLIENT_SORT_KEY sort_key = 5;

#### Defined in

[src/clients.scailo_pb.ts:954](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L954)

___

### sortOrder

• `Optional` **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md)

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: optional Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/clients.scailo_pb.ts:944](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L944)

___

### status

• `Optional` **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md)

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/clients.scailo_pb.ts:1046](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L1046)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/clients.scailo_pb.ts:1206](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L1206)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/clients.scailo_pb.ts:1204](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L1204)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientsServiceFilterReq"``

#### Defined in

[src/clients.scailo_pb.ts:1205](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L1205)

## Methods

### clone

▸ **clone**(): [`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientsServiceFilterReq`](ClientsServiceFilterReq.md) \| `PlainMessage`\<[`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`ClientsServiceFilterReq`](ClientsServiceFilterReq.md) \| `PlainMessage`\<[`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`ClientsServiceFilterReq`](ClientsServiceFilterReq.md) \| `PlainMessage`\<[`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/clients.scailo_pb.ts:1242](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L1242)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)

#### Defined in

[src/clients.scailo_pb.ts:1230](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L1230)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)

#### Defined in

[src/clients.scailo_pb.ts:1234](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L1234)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientsServiceFilterReq`](ClientsServiceFilterReq.md)

#### Defined in

[src/clients.scailo_pb.ts:1238](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L1238)
