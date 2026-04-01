[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientsServiceFilterReq

# Class: ClientsServiceFilterReq

Describes the base request payload of a filter search

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

[src/clients.scailo_pb.ts:1000](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L1000)

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

[src/clients.scailo_pb.ts:947](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L947)

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

[src/clients.scailo_pb.ts:931](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L931)

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

[src/clients.scailo_pb.ts:915](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L915)

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

[src/clients.scailo_pb.ts:963](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L963)

___

### code

• **code**: `string` = `""`

The unique code by which the client is classified

**`Generated`**

from field: string code = 21;

#### Defined in

[src/clients.scailo_pb.ts:977](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L977)

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

[src/clients.scailo_pb.ts:769](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L769)

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

[src/clients.scailo_pb.ts:839](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L839)

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

[src/clients.scailo_pb.ts:823](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L823)

___

### email

• **email**: `string` = `""`

The primary email of the client

**`Generated`**

from field: string email = 22;

#### Defined in

[src/clients.scailo_pb.ts:984](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L984)

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

[src/clients.scailo_pb.ts:887](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L887)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/clients.scailo_pb.ts:998](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L998)

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

[src/clients.scailo_pb.ts:753](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L753)

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

[src/clients.scailo_pb.ts:871](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L871)

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

[src/clients.scailo_pb.ts:855](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L855)

___

### name

• **name**: `string` = `""`

The name of the client

**`Generated`**

from field: string name = 20;

#### Defined in

[src/clients.scailo_pb.ts:970](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L970)

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

[src/clients.scailo_pb.ts:785](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L785)

___

### phone

• **phone**: `string` = `""`

The primary contact number of the client

**`Generated`**

from field: string phone = 23;

#### Defined in

[src/clients.scailo_pb.ts:991](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L991)

___

### sortKey

• **sortKey**: [`CLIENT_SORT_KEY`](../enums/CLIENT_SORT_KEY.md) = `CLIENT_SORT_KEY.CLIENT_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.CLIENT_SORT_KEY sort_key = 5;

#### Defined in

[src/clients.scailo_pb.ts:807](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L807)

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

[src/clients.scailo_pb.ts:797](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L797)

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

[src/clients.scailo_pb.ts:899](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L899)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/clients.scailo_pb.ts:1007](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L1007)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/clients.scailo_pb.ts:1005](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L1005)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientsServiceFilterReq"``

#### Defined in

[src/clients.scailo_pb.ts:1006](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L1006)

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

[src/clients.scailo_pb.ts:1042](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L1042)

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

[src/clients.scailo_pb.ts:1030](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L1030)

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

[src/clients.scailo_pb.ts:1034](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L1034)

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

[src/clients.scailo_pb.ts:1038](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/clients.scailo_pb.ts#L1038)
