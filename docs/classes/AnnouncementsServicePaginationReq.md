[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AnnouncementsServicePaginationReq

# Class: AnnouncementsServicePaginationReq

Pagination request for retrieving slices of announcement records.

**`Generated`**

from message Scailo.AnnouncementsServicePaginationReq

## Hierarchy

- `Message`\<[`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)\>

  ↳ **`AnnouncementsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](AnnouncementsServicePaginationReq.md#constructor)

### Properties

- [count](AnnouncementsServicePaginationReq.md#count)
- [isActive](AnnouncementsServicePaginationReq.md#isactive)
- [offset](AnnouncementsServicePaginationReq.md#offset)
- [sortKey](AnnouncementsServicePaginationReq.md#sortkey)
- [sortOrder](AnnouncementsServicePaginationReq.md#sortorder)
- [status](AnnouncementsServicePaginationReq.md#status)
- [fields](AnnouncementsServicePaginationReq.md#fields)
- [runtime](AnnouncementsServicePaginationReq.md#runtime)
- [typeName](AnnouncementsServicePaginationReq.md#typename)

### Methods

- [clone](AnnouncementsServicePaginationReq.md#clone)
- [equals](AnnouncementsServicePaginationReq.md#equals)
- [fromBinary](AnnouncementsServicePaginationReq.md#frombinary)
- [fromJson](AnnouncementsServicePaginationReq.md#fromjson)
- [fromJsonString](AnnouncementsServicePaginationReq.md#fromjsonstring)
- [getType](AnnouncementsServicePaginationReq.md#gettype)
- [toBinary](AnnouncementsServicePaginationReq.md#tobinary)
- [toJSON](AnnouncementsServicePaginationReq.md#tojson)
- [toJson](AnnouncementsServicePaginationReq.md#tojson-1)
- [toJsonString](AnnouncementsServicePaginationReq.md#tojsonstring)
- [equals](AnnouncementsServicePaginationReq.md#equals-1)
- [fromBinary](AnnouncementsServicePaginationReq.md#frombinary-1)
- [fromJson](AnnouncementsServicePaginationReq.md#fromjson-1)
- [fromJsonString](AnnouncementsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AnnouncementsServicePaginationReq**(`data?`): [`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)\> |

#### Returns

[`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)

#### Overrides

Message\&lt;AnnouncementsServicePaginationReq\&gt;.constructor

#### Defined in

[src/announcements.scailo_pb.ts:713](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L713)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to return per page.

**`Example`**

```ts
50
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Must be a strictly positive integer (1 or greater).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/announcements.scailo_pb.ts:661](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L661)

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

[src/announcements.scailo_pb.ts:645](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L645)

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

[src/announcements.scailo_pb.ts:677](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L677)

___

### sortKey

• `Optional` **sortKey**: [`ANNOUNCEMENT_SORT_KEY`](../enums/ANNOUNCEMENT_SORT_KEY.md)

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: optional Scailo.ANNOUNCEMENT_SORT_KEY sort_key = 5;

#### Defined in

[src/announcements.scailo_pb.ts:699](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L699)

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

[src/announcements.scailo_pb.ts:689](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L689)

___

### status

• `Optional` **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md)

**`Optional`**

**`Description`**

Filter results by a specific lifecycle status.

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/announcements.scailo_pb.ts:711](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L711)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/announcements.scailo_pb.ts:720](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L720)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/announcements.scailo_pb.ts:718](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L718)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AnnouncementsServicePaginationReq"``

#### Defined in

[src/announcements.scailo_pb.ts:719](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L719)

## Methods

### clone

▸ **clone**(): [`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md) \| `PlainMessage`\<[`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md) \| `PlainMessage`\<[`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md) \| `PlainMessage`\<[`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/announcements.scailo_pb.ts:741](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L741)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)

#### Defined in

[src/announcements.scailo_pb.ts:729](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L729)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)

#### Defined in

[src/announcements.scailo_pb.ts:733](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L733)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsServicePaginationReq`](AnnouncementsServicePaginationReq.md)

#### Defined in

[src/announcements.scailo_pb.ts:737](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/announcements.scailo_pb.ts#L737)
