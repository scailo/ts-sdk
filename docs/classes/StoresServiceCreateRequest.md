[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StoresServiceCreateRequest

# Class: StoresServiceCreateRequest

Request message for creating and registering a new retail, wholesale, or fulfillment Store facility.
This record maps geographic or logical location associations, operational points of contact,
internal inventory codes, and multi-tenant security identifiers.

**Note:** This is the primary entry point for Operations, Supply Chain, and Admins to
initialize major business facilities, retail hubs, or regional warehouse environments.

**`Generated`**

from message Scailo.StoresServiceCreateRequest

## Hierarchy

- `Message`\<[`StoresServiceCreateRequest`](StoresServiceCreateRequest.md)\>

  ↳ **`StoresServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](StoresServiceCreateRequest.md#constructor)

### Properties

- [code](StoresServiceCreateRequest.md#code)
- [description](StoresServiceCreateRequest.md#description)
- [entityUuid](StoresServiceCreateRequest.md#entityuuid)
- [inchargeUsername](StoresServiceCreateRequest.md#inchargeusername)
- [locationId](StoresServiceCreateRequest.md#locationid)
- [name](StoresServiceCreateRequest.md#name)
- [phone](StoresServiceCreateRequest.md#phone)
- [userComment](StoresServiceCreateRequest.md#usercomment)
- [fields](StoresServiceCreateRequest.md#fields)
- [runtime](StoresServiceCreateRequest.md#runtime)
- [typeName](StoresServiceCreateRequest.md#typename)

### Methods

- [clone](StoresServiceCreateRequest.md#clone)
- [equals](StoresServiceCreateRequest.md#equals)
- [fromBinary](StoresServiceCreateRequest.md#frombinary)
- [fromJson](StoresServiceCreateRequest.md#fromjson)
- [fromJsonString](StoresServiceCreateRequest.md#fromjsonstring)
- [getType](StoresServiceCreateRequest.md#gettype)
- [toBinary](StoresServiceCreateRequest.md#tobinary)
- [toJSON](StoresServiceCreateRequest.md#tojson)
- [toJson](StoresServiceCreateRequest.md#tojson-1)
- [toJsonString](StoresServiceCreateRequest.md#tojsonstring)
- [equals](StoresServiceCreateRequest.md#equals-1)
- [fromBinary](StoresServiceCreateRequest.md#frombinary-1)
- [fromJson](StoresServiceCreateRequest.md#fromjson-1)
- [fromJsonString](StoresServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new StoresServiceCreateRequest**(`data?`): [`StoresServiceCreateRequest`](StoresServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StoresServiceCreateRequest`](StoresServiceCreateRequest.md)\> |

#### Returns

[`StoresServiceCreateRequest`](StoresServiceCreateRequest.md)

#### Overrides

Message\&lt;StoresServiceCreateRequest\&gt;.constructor

#### Defined in

[src/stores.scailo_pb.ts:225](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L225)

## Properties

### code

• **code**: `string` = `""`

**`Mandatory`**

**`Description`**

The unique code or internal alphanumeric token used to classify the store facility for accounting, delivery, or inventory mapping.

**`Example`**

```ts
"STR-DT-01"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string code = 11;

#### Defined in

[src/stores.scailo_pb.ts:175](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L175)

___

### description

• `Optional` **description**: `string`

**`Optional`**

**`Description`**

Clarifying details or operational parameters regarding the store layout, capacity thresholds, or hours of operation.

**`Example`**

```ts
"Primary retail outlet serving the metropolitan area. Includes standard fulfillment capabilities."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string description = 12;

#### Defined in

[src/stores.scailo_pb.ts:191](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L191)

___

### entityUuid

• `Optional` **entityUuid**: `string`

**`Optional`**

**`Description`**

The globally unique identifier for the Organization or Business Entity.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: optional string entity_uuid = 1;

#### Defined in

[src/stores.scailo_pb.ts:111](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L111)

___

### inchargeUsername

• **inchargeUsername**: `string` = `""`

**`Mandatory`**

**`Description`**

The unique system username or account identifier of the person-in-charge or facility manager responsible for this store.

**`Example`**

```ts
"johndoe_mgr"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string representing a valid user identity token.

**`Generated`**

from field: string incharge_username = 13;

#### Defined in

[src/stores.scailo_pb.ts:207](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L207)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the geographic or logical location under which this store is situated.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative 64-bit integer greater than zero.

**`Generated`**

from field: uint64 location_id = 9;

#### Defined in

[src/stores.scailo_pb.ts:143](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L143)

___

### name

• **name**: `string` = `""`

**`Mandatory`**

**`Description`**

The official, friendly, or legal branding name of the store facility.

**`Example`**

```ts
"Downtown Flagship Store"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string name = 10;

#### Defined in

[src/stores.scailo_pb.ts:159](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L159)

___

### phone

• `Optional` **phone**: `string`

**`Optional`**

**`Description`**

The primary telephone or hot-line contact number explicitly assigned to the store facility.

**`Example`**

```ts
"+1-555-0177"
```

**`Regex`**

.*

**`Format`**

If provided, should follow valid regional or international telephone formatting specifications.

**`Generated`**

from field: optional string phone = 14;

#### Defined in

[src/stores.scailo_pb.ts:223](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L223)

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

from field: optional string user_comment = 2;

#### Defined in

[src/stores.scailo_pb.ts:127](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L127)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stores.scailo_pb.ts:232](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L232)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stores.scailo_pb.ts:230](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L230)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StoresServiceCreateRequest"``

#### Defined in

[src/stores.scailo_pb.ts:231](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L231)

## Methods

### clone

▸ **clone**(): [`StoresServiceCreateRequest`](StoresServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`StoresServiceCreateRequest`](StoresServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`StoresServiceCreateRequest`](StoresServiceCreateRequest.md) \| `PlainMessage`\<[`StoresServiceCreateRequest`](StoresServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`StoresServiceCreateRequest`](StoresServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StoresServiceCreateRequest`](StoresServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`StoresServiceCreateRequest`](StoresServiceCreateRequest.md) \| `PlainMessage`\<[`StoresServiceCreateRequest`](StoresServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`StoresServiceCreateRequest`](StoresServiceCreateRequest.md) \| `PlainMessage`\<[`StoresServiceCreateRequest`](StoresServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stores.scailo_pb.ts:255](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L255)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StoresServiceCreateRequest`](StoresServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StoresServiceCreateRequest`](StoresServiceCreateRequest.md)

#### Defined in

[src/stores.scailo_pb.ts:243](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L243)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StoresServiceCreateRequest`](StoresServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoresServiceCreateRequest`](StoresServiceCreateRequest.md)

#### Defined in

[src/stores.scailo_pb.ts:247](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L247)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StoresServiceCreateRequest`](StoresServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoresServiceCreateRequest`](StoresServiceCreateRequest.md)

#### Defined in

[src/stores.scailo_pb.ts:251](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/stores.scailo_pb.ts#L251)
