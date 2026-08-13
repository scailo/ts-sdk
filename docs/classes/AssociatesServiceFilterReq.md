[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AssociatesServiceFilterReq

# Class: AssociatesServiceFilterReq

Advanced filter request for searching and paginating associates using multiple logical criteria.
This message encapsulates pagination controls, sorting keys, lifecycle status filters,
timestamp ranges, and entity references.

**Note:** This is the primary message layout used by the frontend and external API clients
to build robust data-table queries, reporting views, and targeted record lookups.

**`Generated`**

from message Scailo.AssociatesServiceFilterReq

## Hierarchy

- `Message`\<[`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md)\>

  ↳ **`AssociatesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](AssociatesServiceFilterReq.md#constructor)

### Properties

- [clientId](AssociatesServiceFilterReq.md#clientid)
- [count](AssociatesServiceFilterReq.md#count)
- [creationTimestampEnd](AssociatesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](AssociatesServiceFilterReq.md#creationtimestampstart)
- [department](AssociatesServiceFilterReq.md#department)
- [entityUuid](AssociatesServiceFilterReq.md#entityuuid)
- [firstName](AssociatesServiceFilterReq.md#firstname)
- [isActive](AssociatesServiceFilterReq.md#isactive)
- [jobTitle](AssociatesServiceFilterReq.md#jobtitle)
- [lastName](AssociatesServiceFilterReq.md#lastname)
- [middleName](AssociatesServiceFilterReq.md#middlename)
- [modificationTimestampEnd](AssociatesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](AssociatesServiceFilterReq.md#modificationtimestampstart)
- [offset](AssociatesServiceFilterReq.md#offset)
- [orgName](AssociatesServiceFilterReq.md#orgname)
- [orgRefFrom](AssociatesServiceFilterReq.md#orgreffrom)
- [orgRefId](AssociatesServiceFilterReq.md#orgrefid)
- [personalEmail](AssociatesServiceFilterReq.md#personalemail)
- [personalPhone](AssociatesServiceFilterReq.md#personalphone)
- [sortKey](AssociatesServiceFilterReq.md#sortkey)
- [sortOrder](AssociatesServiceFilterReq.md#sortorder)
- [vendorId](AssociatesServiceFilterReq.md#vendorid)
- [workEmail](AssociatesServiceFilterReq.md#workemail)
- [workPhone](AssociatesServiceFilterReq.md#workphone)
- [fields](AssociatesServiceFilterReq.md#fields)
- [runtime](AssociatesServiceFilterReq.md#runtime)
- [typeName](AssociatesServiceFilterReq.md#typename)

### Methods

- [clone](AssociatesServiceFilterReq.md#clone)
- [equals](AssociatesServiceFilterReq.md#equals)
- [fromBinary](AssociatesServiceFilterReq.md#frombinary)
- [fromJson](AssociatesServiceFilterReq.md#fromjson)
- [fromJsonString](AssociatesServiceFilterReq.md#fromjsonstring)
- [getType](AssociatesServiceFilterReq.md#gettype)
- [toBinary](AssociatesServiceFilterReq.md#tobinary)
- [toJSON](AssociatesServiceFilterReq.md#tojson)
- [toJson](AssociatesServiceFilterReq.md#tojson-1)
- [toJsonString](AssociatesServiceFilterReq.md#tojsonstring)
- [equals](AssociatesServiceFilterReq.md#equals-1)
- [fromBinary](AssociatesServiceFilterReq.md#frombinary-1)
- [fromJson](AssociatesServiceFilterReq.md#fromjson-1)
- [fromJsonString](AssociatesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssociatesServiceFilterReq**(`data?`): [`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md)\> |

#### Returns

[`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md)

#### Overrides

Message\&lt;AssociatesServiceFilterReq\&gt;.constructor

#### Defined in

[src/associates.scailo_pb.ts:1718](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1718)

## Properties

### clientId

• `Optional` **clientId**: `bigint`

**`Optional`**

**`Description`**

Filter results to retrieve only the associates associated with or belonging to a specific Client.

**`Example`**

```ts
9107
```

**`Regex`**

^[0-9]*$

**`Format`**

Non-negative 64-bit integer.

**`Generated`**

from field: optional uint64 client_id = 60;

#### Defined in

[src/associates.scailo_pb.ts:1716](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1716)

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

[src/associates.scailo_pb.ts:1374](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1374)

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

[src/associates.scailo_pb.ts:1444](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1444)

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

[src/associates.scailo_pb.ts:1428](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1428)

___

### department

• `Optional` **department**: `string`

**`Optional`**

**`Description`**

The corporate department or division to which the associate is assigned.

**`Example`**

```ts
"Field Operations"
```

**`Regex`**

^[0-9A-Za-z ]*$

**`Format`**

Alphanumeric characters and spaces allowed. Maximum length of 256 characters.

**`Generated`**

from field: optional string department = 17;

#### Defined in

[src/associates.scailo_pb.ts:1620](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1620)

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

[src/associates.scailo_pb.ts:1492](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1492)

___

### firstName

• `Optional` **firstName**: `string`

**`Optional`**

**`Description`**

The legal first name of the associate. Space characters are strictly prohibited.

**`Example`**

```ts
"John"
```

**`Regex`**

^[0-9A-Za-z]+$

**`Format`**

Alphanumeric characters only. Maximum length of 256 characters.

**`Generated`**

from field: optional string first_name = 10;

#### Defined in

[src/associates.scailo_pb.ts:1508](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1508)

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

[src/associates.scailo_pb.ts:1358](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1358)

___

### jobTitle

• `Optional` **jobTitle**: `string`

**`Optional`**

**`Description`**

The professional job title held by the associate.

**`Example`**

```ts
"Operations Manager"
```

**`Regex`**

^[0-9A-Za-z ]*$

**`Format`**

Alphanumeric characters and spaces allowed. Maximum length of 256 characters.

**`Generated`**

from field: optional string job_title = 16;

#### Defined in

[src/associates.scailo_pb.ts:1604](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1604)

___

### lastName

• `Optional` **lastName**: `string`

**`Optional`**

**`Description`**

The legal last name of the associate. Space characters are strictly prohibited.

**`Example`**

```ts
"Doe"
```

**`Regex`**

^[0-9A-Za-z]*$

**`Format`**

Alphanumeric characters only. Maximum length of 256 characters.

**`Generated`**

from field: optional string last_name = 12;

#### Defined in

[src/associates.scailo_pb.ts:1540](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1540)

___

### middleName

• `Optional` **middleName**: `string`

**`Optional`**

**`Description`**

The legal middle name of the associate. Space characters are strictly prohibited.

**`Example`**

```ts
"Fitzgerald"
```

**`Regex`**

^[0-9A-Za-z]*$

**`Format`**

Alphanumeric characters only. Maximum length of 256 characters.

**`Generated`**

from field: optional string middle_name = 11;

#### Defined in

[src/associates.scailo_pb.ts:1524](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1524)

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

[src/associates.scailo_pb.ts:1476](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1476)

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

[src/associates.scailo_pb.ts:1460](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1460)

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

[src/associates.scailo_pb.ts:1390](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1390)

___

### orgName

• `Optional` **orgName**: `string`

**`Optional`**

**`Description`**

The display name of the organization the associate represents.

**`Example`**

```ts
"Acme Inc"
```

**`Note`**

If an explicit `org_ref_id` is supplied, this field will be automatically overwritten and populated by the backend.

**`Regex`**

^[0-9A-Za-z ]*$

**`Format`**

Alphanumeric characters and spaces allowed. Maximum length of 256 characters.

**`Generated`**

from field: optional string org_name = 15;

#### Defined in

[src/associates.scailo_pb.ts:1588](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1588)

___

### orgRefFrom

• `Optional` **orgRefFrom**: [`ASSOCIATE_ORG_REF_FROM`](../enums/ASSOCIATE_ORG_REF_FROM.md)

**`Optional`**

**`Description`**

Identifies the type of external organization mapping (e.g., Client, Vendor, or None).

**`Example`**

```ts
ASSOCIATE_ORG_REF_FROM_EMPTY
```

**`Format`**

Must align with valid states within the ASSOCIATE_ORG_REF_FROM enum definition.

**`Generated`**

from field: optional Scailo.ASSOCIATE_ORG_REF_FROM org_ref_from = 13;

#### Defined in

[src/associates.scailo_pb.ts:1554](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1554)

___

### orgRefId

• `Optional` **orgRefId**: `bigint`

**`Optional`**

**`Description`**

The numeric sequence identifier matching the targeted external Client or Vendor entity.

**`Example`**

```ts
8923
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer. Evaluated and validated in conjunction with the `org_ref_from` selector.

**`Generated`**

from field: optional uint64 org_ref_id = 14;

#### Defined in

[src/associates.scailo_pb.ts:1570](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1570)

___

### personalEmail

• `Optional` **personalEmail**: `string`

**`Optional`**

**`Description`**

The personal or non-work email address for the associate.

**`Example`**

```ts
"j.doe@personal.com"
```

**`Regex`**

^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$

**`Format`**

If provided, must be a valid email address string.

**`Generated`**

from field: optional string personal_email = 21;

#### Defined in

[src/associates.scailo_pb.ts:1684](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1684)

___

### personalPhone

• `Optional` **personalPhone**: `string`

**`Optional`**

**`Description`**

The personal or secondary mobile phone number for the associate.

**`Example`**

```ts
"+12125550123"
```

**`Regex`**

.+

**`Format`**

Non-empty string; adoption of standard international E.164 formats is highly recommended.

**`Generated`**

from field: optional string personal_phone = 20;

#### Defined in

[src/associates.scailo_pb.ts:1668](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1668)

___

### sortKey

• `Optional` **sortKey**: [`ASSOCIATE_SORT_KEY`](../enums/ASSOCIATE_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.ASSOCIATE_SORT_KEY sort_key = 5;

#### Defined in

[src/associates.scailo_pb.ts:1412](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1412)

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

[src/associates.scailo_pb.ts:1402](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1402)

___

### vendorId

• `Optional` **vendorId**: `bigint`

**`Optional`**

**`Description`**

Filter results to retrieve only the associates associated with or belonging to a specific Vendor.

**`Example`**

```ts
5402
```

**`Regex`**

^[0-9]*$

**`Format`**

Non-negative 64-bit integer.

**`Generated`**

from field: optional uint64 vendor_id = 50;

#### Defined in

[src/associates.scailo_pb.ts:1700](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1700)

___

### workEmail

• `Optional` **workEmail**: `string`

**`Optional`**

**`Description`**

The primary business-related email address for the associate.

**`Example`**

```ts
"j.doe@corporate-hub.com"
```

**`Regex`**

^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$

**`Format`**

If provided, must be a valid email address string.

**`Generated`**

from field: optional string work_email = 19;

#### Defined in

[src/associates.scailo_pb.ts:1652](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1652)

___

### workPhone

• `Optional` **workPhone**: `string`

**`Optional`**

**`Description`**

The primary work or corporate telephone number for contacting the associate.

**`Example`**

```ts
"+12125550123"
```

**`Regex`**

.+

**`Format`**

Non-empty string; adoption of standard international E.164 formats is highly recommended.

**`Generated`**

from field: optional string work_phone = 18;

#### Defined in

[src/associates.scailo_pb.ts:1636](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1636)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/associates.scailo_pb.ts:1725](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1725)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/associates.scailo_pb.ts:1723](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1723)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AssociatesServiceFilterReq"``

#### Defined in

[src/associates.scailo_pb.ts:1724](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1724)

## Methods

### clone

▸ **clone**(): [`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md) \| `PlainMessage`\<[`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md) \| `PlainMessage`\<[`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md) \| `PlainMessage`\<[`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/associates.scailo_pb.ts:1764](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1764)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md)

#### Defined in

[src/associates.scailo_pb.ts:1752](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1752)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md)

#### Defined in

[src/associates.scailo_pb.ts:1756](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1756)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md)

#### Defined in

[src/associates.scailo_pb.ts:1760](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1760)
