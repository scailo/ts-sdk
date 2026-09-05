[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActionCode

# Class: ActionCode

Represents a full Action Code within the system.

**`Generated`**

from message Scailo.ActionCode

## Hierarchy

- `Message`\<[`ActionCode`](ActionCode.md)\>

  ↳ **`ActionCode`**

## Table of contents

### Constructors

- [constructor](ActionCode.md#constructor)

### Properties

- [approvalMetadata](ActionCode.md#approvalmetadata)
- [bgColor](ActionCode.md#bgcolor)
- [code](ActionCode.md#code)
- [description](ActionCode.md#description)
- [entityUuid](ActionCode.md#entityuuid)
- [fgColor](ActionCode.md#fgcolor)
- [isLeaf](ActionCode.md#isleaf)
- [logs](ActionCode.md#logs)
- [metadata](ActionCode.md#metadata)
- [name](ActionCode.md#name)
- [parentActionCodeId](ActionCode.md#parentactioncodeid)
- [status](ActionCode.md#status)
- [fields](ActionCode.md#fields)
- [runtime](ActionCode.md#runtime)
- [typeName](ActionCode.md#typename)

### Methods

- [clone](ActionCode.md#clone)
- [equals](ActionCode.md#equals)
- [fromBinary](ActionCode.md#frombinary)
- [fromJson](ActionCode.md#fromjson)
- [fromJsonString](ActionCode.md#fromjsonstring)
- [getType](ActionCode.md#gettype)
- [toBinary](ActionCode.md#tobinary)
- [toJSON](ActionCode.md#tojson)
- [toJson](ActionCode.md#tojson-1)
- [toJsonString](ActionCode.md#tojsonstring)
- [equals](ActionCode.md#equals-1)
- [fromBinary](ActionCode.md#frombinary-1)
- [fromJson](ActionCode.md#fromjson-1)
- [fromJsonString](ActionCode.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActionCode**(`data?`): [`ActionCode`](ActionCode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActionCode`](ActionCode.md)\> |

#### Returns

[`ActionCode`](ActionCode.md)

#### Overrides

Message\&lt;ActionCode\&gt;.constructor

#### Defined in

[src/actions_codes.scailo_pb.ts:547](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L547)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/actions_codes.scailo_pb.ts:459](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L459)

___

### bgColor

• **bgColor**: `string` = `""`

**`Description`**

The Hexadecimal background color for UI rendering. Used to visually distinguish codes in dashboards or lists.

**`Example`**

```ts
"#FF5733"
```

**`Generated`**

from field: string bg_color = 13;

#### Defined in

[src/actions_codes.scailo_pb.ts:515](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L515)

___

### code

• **code**: `string` = `""`

**`Description`**

The unique alphanumeric identifier used for system classification. This is typically a short string or mnemonic used in logic and filtering.

**`Example`**

```ts
"TECH_SUP_01"
```

**`Generated`**

from field: string code = 11;

#### Defined in

[src/actions_codes.scailo_pb.ts:495](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L495)

___

### description

• **description**: `string` = `""`

**`Description`**

Detailed explanation of what this action code represents and when it should be used.

**`Example`**

```ts
"Used for tracking inbound technical support tickets for Tier 1 issues."
```

**`Generated`**

from field: string description = 18;

#### Defined in

[src/actions_codes.scailo_pb.ts:545](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L545)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Description`**

The organization's globally unique identifier.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/actions_codes.scailo_pb.ts:443](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L443)

___

### fgColor

• **fgColor**: `string` = `""`

**`Description`**

The Hexadecimal foreground (text) color for UI rendering. Used to visually distinguish codes in dashboards or lists.

**`Example`**

```ts
"#FFFFFF"
```

**`Generated`**

from field: string fg_color = 12;

#### Defined in

[src/actions_codes.scailo_pb.ts:505](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L505)

___

### isLeaf

• **isLeaf**: `boolean` = `false`

**`Description`**

Indicates whether this code is a terminal "leaf" node. If `true`, no further sub-codes can be nested under this entry.

**`Example`**

```ts
true
```

**`Generated`**

from field: bool is_leaf = 17;

#### Defined in

[src/actions_codes.scailo_pb.ts:535](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L535)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/actions_codes.scailo_pb.ts:475](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L475)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/actions_codes.scailo_pb.ts:451](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L451)

___

### name

• **name**: `string` = `""`

**`Description`**

The display name of the action code.

**`Example`**

```ts
"Technical Support"
```

**`Generated`**

from field: string name = 10;

#### Defined in

[src/actions_codes.scailo_pb.ts:485](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L485)

___

### parentActionCodeId

• **parentActionCodeId**: `bigint` = `protoInt64.zero`

**`Description`**

The ID of the associated non-leaf parent action code in the action code hierarchy. If `0`, this is a top-level (root) action code.

**`Example`**

```ts
105
```

**`Generated`**

from field: uint64 parent_action_code_id = 16;

#### Defined in

[src/actions_codes.scailo_pb.ts:525](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L525)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/actions_codes.scailo_pb.ts:467](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L467)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/actions_codes.scailo_pb.ts:554](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L554)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/actions_codes.scailo_pb.ts:552](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L552)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActionCode"``

#### Defined in

[src/actions_codes.scailo_pb.ts:553](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L553)

## Methods

### clone

▸ **clone**(): [`ActionCode`](ActionCode.md)

Create a deep copy.

#### Returns

[`ActionCode`](ActionCode.md)

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
| `other` | `undefined` \| ``null`` \| [`ActionCode`](ActionCode.md) \| `PlainMessage`\<[`ActionCode`](ActionCode.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActionCode`](ActionCode.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActionCode`](ActionCode.md)\>

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
| `a` | `undefined` \| [`ActionCode`](ActionCode.md) \| `PlainMessage`\<[`ActionCode`](ActionCode.md)\> |
| `b` | `undefined` \| [`ActionCode`](ActionCode.md) \| `PlainMessage`\<[`ActionCode`](ActionCode.md)\> |

#### Returns

`boolean`

#### Defined in

[src/actions_codes.scailo_pb.ts:581](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L581)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActionCode`](ActionCode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActionCode`](ActionCode.md)

#### Defined in

[src/actions_codes.scailo_pb.ts:569](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L569)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActionCode`](ActionCode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActionCode`](ActionCode.md)

#### Defined in

[src/actions_codes.scailo_pb.ts:573](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L573)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActionCode`](ActionCode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActionCode`](ActionCode.md)

#### Defined in

[src/actions_codes.scailo_pb.ts:577](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/actions_codes.scailo_pb.ts#L577)
