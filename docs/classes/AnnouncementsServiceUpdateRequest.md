[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AnnouncementsServiceUpdateRequest

# Class: AnnouncementsServiceUpdateRequest

Request message for updating an existing Announcement record.
Only applicable for records in `DRAFT` or `REVISION` states.
This message allows for modifying the title, description, start and end timestamps
of an established Announcement.

**Note:** Only fields provided in the request will typically be updated.
The unique system ID is required to locate the target record.

**`Generated`**

from message Scailo.AnnouncementsServiceUpdateRequest

## Hierarchy

- `Message`\<[`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md)\>

  ↳ **`AnnouncementsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](AnnouncementsServiceUpdateRequest.md#constructor)

### Properties

- [description](AnnouncementsServiceUpdateRequest.md#description)
- [endOn](AnnouncementsServiceUpdateRequest.md#endon)
- [id](AnnouncementsServiceUpdateRequest.md#id)
- [notifyUsers](AnnouncementsServiceUpdateRequest.md#notifyusers)
- [startOn](AnnouncementsServiceUpdateRequest.md#starton)
- [title](AnnouncementsServiceUpdateRequest.md#title)
- [userComment](AnnouncementsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](AnnouncementsServiceUpdateRequest.md#vaultfolderid)
- [fields](AnnouncementsServiceUpdateRequest.md#fields)
- [runtime](AnnouncementsServiceUpdateRequest.md#runtime)
- [typeName](AnnouncementsServiceUpdateRequest.md#typename)

### Methods

- [clone](AnnouncementsServiceUpdateRequest.md#clone)
- [equals](AnnouncementsServiceUpdateRequest.md#equals)
- [fromBinary](AnnouncementsServiceUpdateRequest.md#frombinary)
- [fromJson](AnnouncementsServiceUpdateRequest.md#fromjson)
- [fromJsonString](AnnouncementsServiceUpdateRequest.md#fromjsonstring)
- [getType](AnnouncementsServiceUpdateRequest.md#gettype)
- [toBinary](AnnouncementsServiceUpdateRequest.md#tobinary)
- [toJSON](AnnouncementsServiceUpdateRequest.md#tojson)
- [toJson](AnnouncementsServiceUpdateRequest.md#tojson-1)
- [toJsonString](AnnouncementsServiceUpdateRequest.md#tojsonstring)
- [equals](AnnouncementsServiceUpdateRequest.md#equals-1)
- [fromBinary](AnnouncementsServiceUpdateRequest.md#frombinary-1)
- [fromJson](AnnouncementsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](AnnouncementsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new AnnouncementsServiceUpdateRequest**(`data?`): [`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md)\> |

#### Returns

[`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md)

#### Overrides

Message\&lt;AnnouncementsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/announcements.scailo_pb.ts:404](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L404)

## Properties

### description

• `Optional` **description**: `string`

**`Optional`**

**`Description`**

The main body text or details of the announcement, elaborating on the core message.

**`Example`**

```ts
"The primary database will be offline for maintenance on Saturday from 2 AM to 4 AM UTC."
```

**`Regex`**

^[0-9A-Za-z ]+$

**`Format`**

Alphanumeric characters and spaces only. Must not be empty.

**`Generated`**

from field: optional string description = 11;

#### Defined in

[src/announcements.scailo_pb.ts:370](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L370)

___

### endOn

• `Optional` **endOn**: `bigint`

**`Optional`**

**`Description`**

The expiration Unix timestamp (in seconds) indicating when the announcement should stop being displayed.

**`Example`**

```ts
1783468800
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative 64-bit integer representing epoch time. Must be greater than or equal to start_on.

**`Generated`**

from field: optional uint64 end_on = 13;

#### Defined in

[src/announcements.scailo_pb.ts:402](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L402)

___

### id

• **id**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the target record that needs to be updated.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/announcements.scailo_pb.ts:310](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L310)

___

### notifyUsers

• `Optional` **notifyUsers**: `boolean`

**`Optional`**

**`Description`**

Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.

**`Example`**

```ts
true
```

**`Generated`**

from field: optional bool notify_users = 3;

#### Defined in

[src/announcements.scailo_pb.ts:322](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L322)

___

### startOn

• `Optional` **startOn**: `bigint`

**`Optional`**

**`Description`**

The effective Unix timestamp (in seconds) indicating when the announcement becomes active and visible.

**`Example`**

```ts
1783382400
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative 64-bit integer representing epoch time.

**`Generated`**

from field: optional uint64 start_on = 12;

#### Defined in

[src/announcements.scailo_pb.ts:386](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L386)

___

### title

• `Optional` **title**: `string`

**`Optional`**

**`Description`**

The headline or title of the announcement. This is the primary text displayed to targeted users.

**`Example`**

```ts
"Scheduled System Maintenance - This Weekend"
```

**`Regex`**

^[0-9A-Za-z ]+$

**`Format`**

Alphanumeric characters and spaces only. Must not be empty.

**`Generated`**

from field: optional string title = 10;

#### Defined in

[src/announcements.scailo_pb.ts:354](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L354)

___

### userComment

• `Optional` **userComment**: `string`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string user_comment = 1;

#### Defined in

[src/announcements.scailo_pb.ts:294](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L294)

___

### vaultFolderId

• `Optional` **vaultFolderId**: `bigint`

**`Optional`**

**`Description`**

Updated vault folder ID for documentation storage.

**`Example`**

```ts
15235
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 vault_folder_id = 9;

#### Defined in

[src/announcements.scailo_pb.ts:338](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L338)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/announcements.scailo_pb.ts:411](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L411)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/announcements.scailo_pb.ts:409](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L409)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AnnouncementsServiceUpdateRequest"``

#### Defined in

[src/announcements.scailo_pb.ts:410](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L410)

## Methods

### clone

▸ **clone**(): [`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md) \| `PlainMessage`\<[`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md) \| `PlainMessage`\<[`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md) \| `PlainMessage`\<[`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/announcements.scailo_pb.ts:434](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L434)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md)

#### Defined in

[src/announcements.scailo_pb.ts:422](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L422)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md)

#### Defined in

[src/announcements.scailo_pb.ts:426](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L426)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsServiceUpdateRequest`](AnnouncementsServiceUpdateRequest.md)

#### Defined in

[src/announcements.scailo_pb.ts:430](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/announcements.scailo_pb.ts#L430)
