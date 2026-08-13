[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / Announcement

# Class: Announcement

Represents a full Announcement within the system.

**`Generated`**

from message Scailo.Announcement

## Hierarchy

- `Message`\<[`Announcement`](Announcement.md)\>

  ↳ **`Announcement`**

## Table of contents

### Constructors

- [constructor](Announcement.md#constructor)

### Properties

- [approvalMetadata](Announcement.md#approvalmetadata)
- [completedOn](Announcement.md#completedon)
- [description](Announcement.md#description)
- [endOn](Announcement.md#endon)
- [entityUuid](Announcement.md#entityuuid)
- [logs](Announcement.md#logs)
- [metadata](Announcement.md#metadata)
- [startOn](Announcement.md#starton)
- [status](Announcement.md#status)
- [title](Announcement.md#title)
- [vaultFolderId](Announcement.md#vaultfolderid)
- [fields](Announcement.md#fields)
- [runtime](Announcement.md#runtime)
- [typeName](Announcement.md#typename)

### Methods

- [clone](Announcement.md#clone)
- [equals](Announcement.md#equals)
- [fromBinary](Announcement.md#frombinary)
- [fromJson](Announcement.md#fromjson)
- [fromJsonString](Announcement.md#fromjsonstring)
- [getType](Announcement.md#gettype)
- [toBinary](Announcement.md#tobinary)
- [toJSON](Announcement.md#tojson)
- [toJson](Announcement.md#tojson-1)
- [toJsonString](Announcement.md#tojsonstring)
- [equals](Announcement.md#equals-1)
- [fromBinary](Announcement.md#frombinary-1)
- [fromJson](Announcement.md#fromjson-1)
- [fromJsonString](Announcement.md#fromjsonstring-1)

## Constructors

### constructor

• **new Announcement**(`data?`): [`Announcement`](Announcement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`Announcement`](Announcement.md)\> |

#### Returns

[`Announcement`](Announcement.md)

#### Overrides

Message\&lt;Announcement\&gt;.constructor

#### Defined in

[src/announcements.scailo_pb.ts:548](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L548)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/announcements.scailo_pb.ts:470](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L470)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

**`Description`**

UNIX timestamp of when the record transitioned to the COMPLETED state.

**`Example`**

```ts
1698400000
```

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

[src/announcements.scailo_pb.ts:496](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L496)

___

### description

• **description**: `string` = `""`

**`Description`**

The main body text or details of the announcement, elaborating on the core message.

**`Example`**

```ts
"The primary database will be offline for maintenance on Saturday from 2 AM to 4 AM UTC."
```

**`Generated`**

from field: string description = 11;

#### Defined in

[src/announcements.scailo_pb.ts:526](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L526)

___

### endOn

• **endOn**: `bigint` = `protoInt64.zero`

**`Description`**

The expiration Unix timestamp (in seconds) indicating when the announcement should stop being displayed.

**`Example`**

```ts
1783468800
```

**`Generated`**

from field: uint64 end_on = 13;

#### Defined in

[src/announcements.scailo_pb.ts:546](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L546)

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

[src/announcements.scailo_pb.ts:454](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L454)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/announcements.scailo_pb.ts:486](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L486)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/announcements.scailo_pb.ts:462](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L462)

___

### startOn

• **startOn**: `bigint` = `protoInt64.zero`

**`Description`**

The effective Unix timestamp (in seconds) indicating when the announcement becomes active and visible.

**`Example`**

```ts
1783382400
```

**`Generated`**

from field: uint64 start_on = 12;

#### Defined in

[src/announcements.scailo_pb.ts:536](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L536)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/announcements.scailo_pb.ts:478](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L478)

___

### title

• **title**: `string` = `""`

**`Description`**

The headline or title of the announcement. This is the primary text displayed to targeted users.

**`Example`**

```ts
"Scheduled System Maintenance - This Weekend"
```

**`Generated`**

from field: string title = 10;

#### Defined in

[src/announcements.scailo_pb.ts:516](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L516)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Description`**

Link to the document storage folder.

**`Example`**

```ts
15234
```

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/announcements.scailo_pb.ts:506](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L506)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/announcements.scailo_pb.ts:555](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L555)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/announcements.scailo_pb.ts:553](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L553)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Announcement"``

#### Defined in

[src/announcements.scailo_pb.ts:554](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L554)

## Methods

### clone

▸ **clone**(): [`Announcement`](Announcement.md)

Create a deep copy.

#### Returns

[`Announcement`](Announcement.md)

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
| `other` | `undefined` \| ``null`` \| [`Announcement`](Announcement.md) \| `PlainMessage`\<[`Announcement`](Announcement.md)\> |

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

▸ **getType**(): `MessageType`\<[`Announcement`](Announcement.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`Announcement`](Announcement.md)\>

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
| `a` | `undefined` \| [`Announcement`](Announcement.md) \| `PlainMessage`\<[`Announcement`](Announcement.md)\> |
| `b` | `undefined` \| [`Announcement`](Announcement.md) \| `PlainMessage`\<[`Announcement`](Announcement.md)\> |

#### Returns

`boolean`

#### Defined in

[src/announcements.scailo_pb.ts:581](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L581)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Announcement`](Announcement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`Announcement`](Announcement.md)

#### Defined in

[src/announcements.scailo_pb.ts:569](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L569)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Announcement`](Announcement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Announcement`](Announcement.md)

#### Defined in

[src/announcements.scailo_pb.ts:573](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L573)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Announcement`](Announcement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Announcement`](Announcement.md)

#### Defined in

[src/announcements.scailo_pb.ts:577](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L577)
