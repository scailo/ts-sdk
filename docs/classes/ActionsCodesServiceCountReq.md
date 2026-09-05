[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActionsCodesServiceCountReq

# Class: ActionsCodesServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.ActionsCodesServiceCountReq

## Hierarchy

- `Message`\<[`ActionsCodesServiceCountReq`](ActionsCodesServiceCountReq.md)\>

  ↳ **`ActionsCodesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](ActionsCodesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](ActionsCodesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](ActionsCodesServiceCountReq.md#approvedonend)
- [approvedOnStart](ActionsCodesServiceCountReq.md#approvedonstart)
- [approverRoleId](ActionsCodesServiceCountReq.md#approverroleid)
- [bgColor](ActionsCodesServiceCountReq.md#bgcolor)
- [code](ActionsCodesServiceCountReq.md#code)
- [creationTimestampEnd](ActionsCodesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](ActionsCodesServiceCountReq.md#creationtimestampstart)
- [entityUuid](ActionsCodesServiceCountReq.md#entityuuid)
- [fgColor](ActionsCodesServiceCountReq.md#fgcolor)
- [isActive](ActionsCodesServiceCountReq.md#isactive)
- [isLeaf](ActionsCodesServiceCountReq.md#isleaf)
- [modificationTimestampEnd](ActionsCodesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](ActionsCodesServiceCountReq.md#modificationtimestampstart)
- [name](ActionsCodesServiceCountReq.md#name)
- [parentActionCodeId](ActionsCodesServiceCountReq.md#parentactioncodeid)
- [status](ActionsCodesServiceCountReq.md#status)
- [fields](ActionsCodesServiceCountReq.md#fields)
- [runtime](ActionsCodesServiceCountReq.md#runtime)
- [typeName](ActionsCodesServiceCountReq.md#typename)

### Methods

- [clone](ActionsCodesServiceCountReq.md#clone)
- [equals](ActionsCodesServiceCountReq.md#equals)
- [fromBinary](ActionsCodesServiceCountReq.md#frombinary)
- [fromJson](ActionsCodesServiceCountReq.md#fromjson)
- [fromJsonString](ActionsCodesServiceCountReq.md#fromjsonstring)
- [getType](ActionsCodesServiceCountReq.md#gettype)
- [toBinary](ActionsCodesServiceCountReq.md#tobinary)
- [toJSON](ActionsCodesServiceCountReq.md#tojson)
- [toJson](ActionsCodesServiceCountReq.md#tojson-1)
- [toJsonString](ActionsCodesServiceCountReq.md#tojsonstring)
- [equals](ActionsCodesServiceCountReq.md#equals-1)
- [fromBinary](ActionsCodesServiceCountReq.md#frombinary-1)
- [fromJson](ActionsCodesServiceCountReq.md#fromjson-1)
- [fromJsonString](ActionsCodesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActionsCodesServiceCountReq**(`data?`): [`ActionsCodesServiceCountReq`](ActionsCodesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActionsCodesServiceCountReq`](ActionsCodesServiceCountReq.md)\> |

#### Returns

[`ActionsCodesServiceCountReq`](ActionsCodesServiceCountReq.md)

#### Overrides

Message\&lt;ActionsCodesServiceCountReq\&gt;.constructor

#### Defined in

[src/actions_codes.scailo_pb.ts:1463](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L1463)

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

[src/actions_codes.scailo_pb.ts:1353](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L1353)

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

[src/actions_codes.scailo_pb.ts:1337](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L1337)

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

[src/actions_codes.scailo_pb.ts:1321](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L1321)

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

[src/actions_codes.scailo_pb.ts:1369](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L1369)

___

### bgColor

• **bgColor**: `string` = `""`

**`Optional`**

**`Description`**

Exact match for the Hexadecimal background (text) color.

**`Example`**

```ts
"#FF5733"
```

**`Regex`**

"^$|^#[0-9a-fA-F]{6}$"

**`Format`**

May be empty, but if provided, must be a '#' followed by exactly 6 hex characters.

**`Generated`**

from field: string bg_color = 23;

#### Defined in

[src/actions_codes.scailo_pb.ts:1433](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L1433)

___

### code

• **code**: `string` = `""`

**`Optional`**

**`Description`**

Exact match for the unique alphanumeric identifier.

**`Example`**

```ts
"TECH_SUP_01"
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: string code = 21;

#### Defined in

[src/actions_codes.scailo_pb.ts:1401](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L1401)

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

[src/actions_codes.scailo_pb.ts:1245](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L1245)

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

[src/actions_codes.scailo_pb.ts:1229](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L1229)

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

[src/actions_codes.scailo_pb.ts:1293](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L1293)

___

### fgColor

• **fgColor**: `string` = `""`

**`Optional`**

**`Description`**

Exact match for the Hexadecimal foreground (text) color.

**`Example`**

```ts
"#FFFFFF"
```

**`Regex`**

"^$|^#[0-9a-fA-F]{6}$"

**`Format`**

May be empty, but if provided, must be a '#' followed by exactly 6 hex characters.

**`Generated`**

from field: string fg_color = 22;

#### Defined in

[src/actions_codes.scailo_pb.ts:1417](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L1417)

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

[src/actions_codes.scailo_pb.ts:1213](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L1213)

___

### isLeaf

• **isLeaf**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by the given leaf property (TRUE, FALSE, ANY)

**`Example`**

```ts
ANY
```

**`Generated`**

from field: Scailo.BOOL_FILTER is_leaf = 27;

#### Defined in

[src/actions_codes.scailo_pb.ts:1461](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L1461)

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

[src/actions_codes.scailo_pb.ts:1277](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L1277)

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

[src/actions_codes.scailo_pb.ts:1261](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L1261)

___

### name

• **name**: `string` = `""`

**`Optional`**

**`Description`**

Fuzzy match for the display name.

**`Example`**

```ts
"Technical Support"
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: string name = 20;

#### Defined in

[src/actions_codes.scailo_pb.ts:1385](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L1385)

___

### parentActionCodeId

• **parentActionCodeId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter by specific ID of the parent action code. If this is set, then all the action codes that are associated to this parent action code are retrieved.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 parent_action_code_id = 26;

#### Defined in

[src/actions_codes.scailo_pb.ts:1449](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L1449)

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

[src/actions_codes.scailo_pb.ts:1305](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L1305)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/actions_codes.scailo_pb.ts:1470](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L1470)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/actions_codes.scailo_pb.ts:1468](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L1468)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActionsCodesServiceCountReq"``

#### Defined in

[src/actions_codes.scailo_pb.ts:1469](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L1469)

## Methods

### clone

▸ **clone**(): [`ActionsCodesServiceCountReq`](ActionsCodesServiceCountReq.md)

Create a deep copy.

#### Returns

[`ActionsCodesServiceCountReq`](ActionsCodesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ActionsCodesServiceCountReq`](ActionsCodesServiceCountReq.md) \| `PlainMessage`\<[`ActionsCodesServiceCountReq`](ActionsCodesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActionsCodesServiceCountReq`](ActionsCodesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActionsCodesServiceCountReq`](ActionsCodesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`ActionsCodesServiceCountReq`](ActionsCodesServiceCountReq.md) \| `PlainMessage`\<[`ActionsCodesServiceCountReq`](ActionsCodesServiceCountReq.md)\> |
| `b` | `undefined` \| [`ActionsCodesServiceCountReq`](ActionsCodesServiceCountReq.md) \| `PlainMessage`\<[`ActionsCodesServiceCountReq`](ActionsCodesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/actions_codes.scailo_pb.ts:1502](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L1502)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActionsCodesServiceCountReq`](ActionsCodesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActionsCodesServiceCountReq`](ActionsCodesServiceCountReq.md)

#### Defined in

[src/actions_codes.scailo_pb.ts:1490](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L1490)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActionsCodesServiceCountReq`](ActionsCodesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActionsCodesServiceCountReq`](ActionsCodesServiceCountReq.md)

#### Defined in

[src/actions_codes.scailo_pb.ts:1494](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L1494)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActionsCodesServiceCountReq`](ActionsCodesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActionsCodesServiceCountReq`](ActionsCodesServiceCountReq.md)

#### Defined in

[src/actions_codes.scailo_pb.ts:1498](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L1498)
